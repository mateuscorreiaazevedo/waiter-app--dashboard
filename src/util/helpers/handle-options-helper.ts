type HandleOptionsHelperProps<T = unknown> = {
  data: T[];
  keys: {
    label: keyof T;
    value: keyof T;
  };
};

export function handleOptionsHelper<T = unknown>({
  data,
  keys,
}: HandleOptionsHelperProps<T>) {
  return data.map(item => ({
    label: item[keys.label],
    value: item[keys.value],
  }));
}
