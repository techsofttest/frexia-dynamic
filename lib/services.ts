// --------------------------------------------------
// Service List
// --------------------------------------------------

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string | null;
}

// --------------------------------------------------
// Service Detail
// --------------------------------------------------

export interface ServiceDetail {
  id: number;
  title: string;
  slug: string;
  shortDesc: string;
  image: string;

  // // Banner
  // banner: {
  //   title: string;
  //   content: string;
  // };

  // Service Content
  overview: string;
  features: string[];
  benefits: string[];

  // SEO
  seo: {
    meta_title: string;
    meta_desc: string;
    meta_key: string;
  };
}

// --------------------------------------------------
// Services SEO
// --------------------------------------------------

export interface ServicesSeo {
  meta_title: string;
  meta_desc: string;
  meta_key: string;
}

// --------------------------------------------------
// Services Banner
// --------------------------------------------------

export interface ServicesBanner {
  title_first: string;
  title_highlight: string;
  content: string;
  image: string | null;
}

// --------------------------------------------------
// What We Do
// --------------------------------------------------

export interface ServicesWhatWeDo {
  title_first: string;
  title_highlight: string;
  content: string;
}

// --------------------------------------------------
// Services Page
// --------------------------------------------------

export interface ServicesPage {
  seo: ServicesSeo;
  banner: ServicesBanner;
  what_we_do: ServicesWhatWeDo;
  data: Service[];
}

// --------------------------------------------------
// Get All Services
// --------------------------------------------------

export async function getServices(): Promise<ServicesPage> {
  const emptyResponse: ServicesPage = {
    seo: {
      meta_title: "",
      meta_desc: "",
      meta_key: "",
    },

    banner: {
      title_first: "",
      title_highlight: "",
      content: "",
      image: null,
    },

    what_we_do: {
      title_first: "",
      title_highlight: "",
      content: "",
    },

    data: [],
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/services`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }

    const result = await response.json();

    if (!result.success) {
      return emptyResponse;
    }

    return {
      // ----------------------------------------
      // SEO
      // ----------------------------------------

      seo: {
        meta_title: result.seo?.meta_title ?? "",
        meta_desc: result.seo?.meta_desc ?? "",
        meta_key: result.seo?.meta_key ?? "",
      },

      // ----------------------------------------
      // Service Banner
      // ----------------------------------------

      banner: {
        title_first: result.banner?.title_first ?? "",
        title_highlight: result.banner?.title_highlight ?? "",
        content: result.banner?.content ?? "",
        image: result.banner?.image ?? null,
      },

      // ----------------------------------------
      // What We Do
      // ----------------------------------------

      what_we_do: {
        title_first: result.what_we_do?.title_first ?? "",
        title_highlight: result.what_we_do?.title_highlight ?? "",
        content: result.what_we_do?.content ?? "",
      },

      // ----------------------------------------
      // Services
      // ----------------------------------------

      data: Array.isArray(result.data)
        ? result.data.map((service: any) => ({
            id: service.id,
            title: service.title ?? "",
            slug: service.slug ?? "",
            description: service.description ?? "",
            image: service.image ?? null,
          }))
        : [],
    };
  } catch (error) {
    console.error("Services API Error:", error);

    return emptyResponse;
  }
}

// --------------------------------------------------
// Get Single Service By Slug
// --------------------------------------------------

export async function getServiceBySlug(
  slug: string,
): Promise<ServiceDetail | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/services/${slug}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return null;
    }

    const result = await response.json();

    if (!result.success || !result.data) {
      return null;
    }

    const service = result.data;

    return {
      // ----------------------------------------
      // Basic Service Information
      // ----------------------------------------

      id: service.id,

      title: service.title ?? "",

      slug: service.slug ?? "",

      shortDesc: service.description ?? "",

      image: service.image ?? "",

      // ----------------------------------------
      // Banner
      // ----------------------------------------

      // banner: {
      //   title: service.banner?.title ?? "",
      //   content: service.banner?.content ?? "",
      // },

      // ----------------------------------------
      // Service Content
      // ----------------------------------------

      overview: service.overview ?? "",

      features: Array.isArray(service.features) ? service.features : [],

      benefits: Array.isArray(service.benefits) ? service.benefits : [],

      // ----------------------------------------
      // SEO
      // ----------------------------------------

      seo: {
        meta_title: service.seo?.meta_title ?? "",
        meta_desc: service.seo?.meta_desc ?? "",
        meta_key: service.seo?.meta_key ?? "",
      },
    };
  } catch (error) {
    console.error("Service Detail API Error:", error);

    return null;
  }
}
