import type { CategoryModel } from '../../models/Category';
import { RowFilterCategoriesItem } from './RowFilterCategoriesItem';
import { RowFilterCategoriesSkeleton } from './RowFilterCategoriesSkeleton';

const categories: CategoryModel[] = [
  {
    _id: '68843778e1ae4a08dd5d4cc2',
    name: 'Pizza',
    icon: '🍕',
  },
  {
    _id: '688437b2e1ae4a08dd5d4cc5',
    name: 'Bebidas',
    icon: '🍻',
  },
  {
    _id: '688437c7e1ae4a08dd5d4cc7',
    name: 'Burguers',
    icon: '🍔',
  },
  {
    _id: '688437d3e1ae4a08dd5d4cc9',
    name: 'Promoções',
    icon: '🏷️',
  },
];

interface RowFilterCategoriesProps {
  selectedCategory: string | null;
  onSelectedCategory: (categoryId: string) => void;
}

export function RowFilterCategories({
  onSelectedCategory,
  selectedCategory,
}: RowFilterCategoriesProps) {
  const isLoading = false;
  return (
    <div className="flex min-h-[74px]">
      <div className="flex max-w-full flex-1 items-center gap-2 overflow-x-auto">
        {isLoading && <RowFilterCategoriesSkeleton />}

        {!isLoading &&
          categories.map(item => (
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
