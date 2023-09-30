
export interface FooterSection {
  id: number,
  sectionTitle: string,
  sectionItems: {
    id: number,
    text: string,
    link: string,
  }[],
  subcategory?: {
    title: string,
    text: string,
    link: string,
  }
}

export type FooterContent = FooterSection[]