import api from "@/utils/api";
import CategoryShopPage from "./category_shop_page";

export async function generateStaticParams() {
  const response = await api.get(`/api/category/get-all`);
  const categories = response.data.categories;
  return categories.map((category: any) => ({
    slug: category.slug,
  }));
}

export default async function Page({ params }: { params: any }) {
  const routeParams = await params;
  const slug = routeParams.slug;

  return <CategoryShopPage category={slug} />;
}
