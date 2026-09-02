// --------------------------------------------------
// Industry List
// --------------------------------------------------

export interface Industry {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string | null;
}

// --------------------------------------------------
// Industry Detail
// --------------------------------------------------

export interface IndustryDetail {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string | null;

  // // Banner
  // banner: {
  //   title: string;
  //   content: string;
  // };

  // Industry Content
  overview: string;
  sector_highlights: string[];
  supply_chain_capabilities: string[];

  // SEO
  seo: {
    meta_title: string;
    meta_desc: string;
    meta_key: string;
  };
}

// --------------------------------------------------
// Industries SEO
// --------------------------------------------------

export interface IndustriesSeo {
  meta_title: string;
  meta_desc: string;
  meta_key: string;
}

// --------------------------------------------------
// Industries Banner
// --------------------------------------------------

export interface IndustriesBanner {
  title_first: string;
  title_highlight: string;
  content: string;
  image: string | null;
}

// --------------------------------------------------
// Sectors We Empower
// --------------------------------------------------

export interface IndustriesSectorsWeEmpower {
  title_first: string;
  title_highlight: string;
}

// --------------------------------------------------
// Industries Page
// --------------------------------------------------

export interface IndustriesPage {
  seo: IndustriesSeo;
  banner: IndustriesBanner;
  sectors_we_empower: IndustriesSectorsWeEmpower;
  data: Industry[];
}

// --------------------------------------------------
// Get All Industries
// --------------------------------------------------

export async function getIndustries(): Promise<IndustriesPage> {
  const emptyResponse: IndustriesPage = {
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

    sectors_we_empower: {
      title_first: "",
      title_highlight: "",
    },

    data: [],
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/industries`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch industries");
    }

    const result = await response.json();

    // ==================================================
    // SUCCESS CHECK
    // ==================================================

    if (!result.success) {
      console.log("Industries API returned success=false");

      return emptyResponse;
    }

    // ==================================================
    // MAP RESPONSE
    // ==================================================

    const finalResponse: IndustriesPage = {
      // ----------------------------------------
      // SEO
      // ----------------------------------------

      seo: {
        meta_title: result.seo?.meta_title ?? "",
        meta_desc: result.seo?.meta_desc ?? "",
        meta_key: result.seo?.meta_key ?? "",
      },

      // ----------------------------------------
      // Industry Banner
      // ----------------------------------------

      banner: {
        title_first: result.banner?.title_first ?? "",
        title_highlight: result.banner?.title_highlight ?? "",
        content: result.banner?.content ?? "",
        image: result.banner?.image ?? null,
      },

      // ----------------------------------------
      // Sectors We Empower
      // ----------------------------------------

      sectors_we_empower: {
        title_first: result.sectors_we_empower?.title_first ?? "",
        title_highlight: result.sectors_we_empower?.title_highlight ?? "",
      },

      // ----------------------------------------
      // Industries
      // ----------------------------------------

      data: Array.isArray(result.data)
        ? result.data.map((industry: any) => ({
            id: industry.id,
            title: industry.title ?? "",
            slug: industry.slug ?? "",
            description: industry.description ?? "",
            image: industry.image ?? null,
          }))
        : [],
    };

    return finalResponse;
  } catch (error) {
    console.error("========================================");
    console.error("Industries API Error:", error);
    console.error("========================================");

    return emptyResponse;
  }
}

// --------------------------------------------------
// Get Single Industry By Slug
// --------------------------------------------------

export async function getIndustryBySlug(
  slug: string,
): Promise<IndustryDetail | null> {
  try {
    // ==================================================
    // API REQUEST
    // ==================================================

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/industries/${slug}`,
      {
        cache: "no-store",
      },
    );

    // ==================================================
    // HTTP ERROR
    // ==================================================

    if (!response.ok) {
      console.error(
        `Industry Detail API Error: ${response.status} ${response.statusText}`,
      );

      return null;
    }

    // ==================================================
    // RAW API RESPONSE
    // ==================================================

    const result = await response.json();

    // ==================================================
    // SUCCESS CHECK
    // ==================================================

    if (!result.success || !result.data) {
      console.error("Industry Detail API returned invalid data");

      return null;
    }

    const industry = result.data;

    // ==================================================
    // MAP FINAL RESPONSE
    // ==================================================

    const finalResponse: IndustryDetail = {
      // ----------------------------------------
      // Basic Industry Information
      // ----------------------------------------

      id: industry.id,

      title: industry.title ?? "",

      slug: industry.slug ?? "",

      description: industry.description ?? "",

      image: industry.image ?? null,

      // ----------------------------------------
      // Banner
      // ----------------------------------------

      // banner: {
      //   title: industry.banner?.title ?? "",
      //   content: industry.banner?.content ?? "",
      // },

      // ----------------------------------------
      // Industry Content
      // ----------------------------------------

      overview: industry.overview ?? "",

      sector_highlights: Array.isArray(industry.sector_highlights)
        ? industry.sector_highlights
        : [],

      supply_chain_capabilities: Array.isArray(
        industry.supply_chain_capabilities,
      )
        ? industry.supply_chain_capabilities
        : [],

      // ----------------------------------------
      // SEO
      // ----------------------------------------

      seo: {
        meta_title: industry.seo?.meta_title ?? "",
        meta_desc: industry.seo?.meta_desc ?? "",
        meta_key: industry.seo?.meta_key ?? "",
      },
    };

    return finalResponse;
  } catch (error) {
    return null;
  }
}
