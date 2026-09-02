// --------------------------------------------------
// Contact Data
// --------------------------------------------------

export interface Contact {
  address?: string;
  map_link?: string;
  phone?: string;
  email?: string;
  whatsapp?: string;
  twitter?: string;
  linkedin?: string;
}

// --------------------------------------------------
// Contact SEO
// --------------------------------------------------

export interface ContactSeo {
  meta_title?: string;
  meta_desc?: string;
  meta_key?: string;
}

// --------------------------------------------------
// Contact Banner
// --------------------------------------------------

export interface ContactBanner {
  title_first?: string;
  title_highlight?: string;
  content?: string;
  image?: string | null;
}

// --------------------------------------------------
// Contact Page
// --------------------------------------------------

export interface ContactPage {
  seo: ContactSeo;
  banner: ContactBanner;
  data: Contact;
}

// --------------------------------------------------
// Contact API Response
// --------------------------------------------------

export interface ContactResponse {
  success: boolean;
  seo?: ContactSeo;
  banner?: ContactBanner;
  data?: Contact;
}

// --------------------------------------------------
// Get Contact Page
// --------------------------------------------------

export async function getContact(): Promise<ContactPage> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch contact information");
    }

    const result: ContactResponse = await response.json();

    if (!result.success) {
      return {
        seo: {},
        banner: {},
        data: {},
      };
    }

    return {
      seo: result.seo ?? {},
      banner: result.banner ?? {},
      data: result.data ?? {},
    };
  } catch (error) {
    console.error("Contact API Error:", error);

    return {
      seo: {},
      banner: {},
      data: {},
    };
  }
}
