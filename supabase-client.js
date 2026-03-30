(function () {
  const config = window.KMU_SUPABASE_CONFIG;

  if (!window.supabase || !config?.url || !config?.anonKey) {
    window.kmuSupabase = null;
    window.kmuSupabaseApi = null;
    return;
  }

  const client = window.supabase.createClient(config.url, config.anonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });

  const TABLES = {
    promoSlides: 'promo_slides',
    studentEvents: 'student_events'
  };

  function normalizePromoSlide(record, index) {
    return {
      id: record.id || `promo-${index + 1}`,
      title: record.title || '',
      meta: record.meta || '',
      image: record.image || '',
      link: record.link || '',
      background: record.background || '#b8b8b8',
      dark: Boolean(record.dark),
      sort_order: Number(record.sort_order ?? index),
      active: record.active !== false
    };
  }

  function normalizeStudentEvent(record, index) {
    return {
      id: record.id || `student-event-${index + 1}`,
      title: record.title || '',
      start: record.start || record.start_date || '',
      end: record.end || record.end_date || record.start || record.start_date || '',
      type: record.type || 'student-event',
      sort_order: Number(record.sort_order ?? index),
      active: record.active !== false
    };
  }

  async function fetchPromoSlides(fallback) {
    try {
      const { data, error } = await client
        .from(TABLES.promoSlides)
        .select('*')
        .eq('active', true)
        .order('sort_order', { ascending: true });

      if (error) {
        throw error;
      }

      if (!Array.isArray(data) || data.length === 0) {
        return JSON.parse(JSON.stringify(fallback));
      }

      return data.map(normalizePromoSlide);
    } catch (error) {
      console.error('[Supabase] promo slides fetch failed', error);
      return JSON.parse(JSON.stringify(fallback));
    }
  }

  async function fetchStudentEvents(fallback) {
    try {
      const { data, error } = await client
        .from(TABLES.studentEvents)
        .select('*')
        .eq('active', true)
        .order('sort_order', { ascending: true });

      if (error) {
        throw error;
      }

      if (!Array.isArray(data) || data.length === 0) {
        return JSON.parse(JSON.stringify(fallback));
      }

      return data.map(normalizeStudentEvent);
    } catch (error) {
      console.error('[Supabase] student events fetch failed', error);
      return JSON.parse(JSON.stringify(fallback));
    }
  }

  async function replacePromoSlides(slides) {
    const payload = slides.map(normalizePromoSlide).map((slide, index) => ({
      id: slide.id,
      title: slide.title,
      meta: slide.meta,
      image: slide.image,
      link: slide.link,
      background: slide.background,
      dark: slide.dark,
      sort_order: index,
      active: true
    }));

    const { error: deleteError } = await client
      .from(TABLES.promoSlides)
      .delete()
      .not('id', 'is', null);

    if (deleteError) {
      throw deleteError;
    }

    if (!payload.length) {
      return [];
    }

    const { data, error } = await client
      .from(TABLES.promoSlides)
      .insert(payload)
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) {
      throw error;
    }

    return data.map(normalizePromoSlide);
  }

  async function replaceStudentEvents(events) {
    const payload = events.map(normalizeStudentEvent).map((event, index) => ({
      id: event.id,
      title: event.title,
      start_date: event.start,
      end_date: event.end,
      type: 'student-event',
      sort_order: index,
      active: true
    }));

    const { error: deleteError } = await client
      .from(TABLES.studentEvents)
      .delete()
      .not('id', 'is', null);

    if (deleteError) {
      throw deleteError;
    }

    if (!payload.length) {
      return [];
    }

    const { data, error } = await client
      .from(TABLES.studentEvents)
      .insert(payload)
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) {
      throw error;
    }

    return data.map(normalizeStudentEvent);
  }

  async function signIn(email, password) {
    return client.auth.signInWithPassword({ email, password });
  }

  async function signOut() {
    return client.auth.signOut();
  }

  async function getSession() {
    const { data, error } = await client.auth.getSession();
    if (error) {
      throw error;
    }
    return data.session;
  }

  window.kmuSupabase = client;
  window.kmuSupabaseApi = {
    client,
    tables: TABLES,
    fetchPromoSlides,
    fetchStudentEvents,
    replacePromoSlides,
    replaceStudentEvents,
    signIn,
    signOut,
    getSession,
    onAuthStateChange: client.auth.onAuthStateChange.bind(client.auth)
  };
})();
