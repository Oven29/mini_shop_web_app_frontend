import { useEffect, useState } from "react"
import { categoryService } from "../services/categoryService";
import { Product } from "../services/schemas";
import { useParams } from "react-router-dom";
import StatusWrapper from "../components/StatusWrapper";

export default function CategoryPage() {
  const CategoryId: number = Number.parseInt(useParams().id || '')

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await categoryService.getProducts(CategoryId);
        setProducts(data);
      } catch (error: any) {
        console.error(error);
        setError(error);
      } finally {
       setIsLoading(false); 
      }
    };
  
    fetchData();
  }, [])

  return (
    <StatusWrapper isLoading={isLoading} error={error}>
      <>{products.map((product: Product) => (
        <>
          <p>{product.id} {product.name}</p>
        </>
      ))}</>
    </StatusWrapper>
  )
}