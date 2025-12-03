import { useFetchCategories } from '../../hooks/useFetchCategories';
import { RowFilterCategoriesItem } from './RowFilterCategoriesItem';
import { RowFilterCategoriesSkeleton } from './RowFilterCategoriesSkeleton';

interface RowFilterCategoriesProps {
  selectedCategory: string | null;
  onSelectedCategory: (categoryId: string) => void;
}

export function RowFilterCategories({
  onSelectedCategory,
  selectedCategory,
}: RowFilterCategoriesProps) {
  const { isLoading, categories, isFetched } = useFetchCategories();

  return (
    <div className="flex min-h-[74px] flex-col">
      <div className="flex max-w-full flex-1 items-center gap-1 overflow-x-auto">
        {isLoading && <RowFilterCategoriesSkeleton />}

        {isFetched &&
          !isLoading &&
          categories?.map(item => (
            <RowFilterCategoriesItem
              key={item._id}
              {...item}
              isActive={item._id === selectedCategory}
              onClick={onSelectedCategory}
            />
          ))}
      </div>
    </div>
  );
}
