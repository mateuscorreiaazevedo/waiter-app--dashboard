import clsx from 'clsx';
import type { CategoryModel } from '../../models/Category';

type RowFilterCategoriesItemProps = CategoryModel & {
  isActive?: boolean;
  onClick?: (categoryId: string) => void;
};

export function RowFilterCategoriesItem(props: RowFilterCategoriesItemProps) {
  const { _id, icon, name, isActive = false, onClick = () => {} } = props;

  return (
    <button
      className={clsx(
        'flex flex-col items-center gap-2 px-2 py-4 transition-all',
        isActive ? 'opacity-100' : 'cursor-pointer opacity-40'
      )}
      onClick={() => onClick(_id)}
      type="button"
    >
      <div className="flex size-[52px] items-center justify-center rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
        <span className="text-2xl">{icon}</span>
      </div>
      <span className="font-semibold text-sm">{name}</span>
    </button>
  );
}
