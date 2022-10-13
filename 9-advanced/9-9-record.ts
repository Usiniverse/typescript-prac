type PageInfo = {
  title: string;
};
type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = { // Page를 key, PageInfo를 value로 한다
  home: { title: 'home' },
  about: { title : 'about' },
  contact: { title: 'contact' }
}

type Product = 'cat' | 'cog';
type NewProduct = Capitalize<Product>; // Cat, Dog로 사용할 수 있음(대문자 전환)

