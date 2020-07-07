type Entries<T extends object = {}> = Array<
  {
    [key in keyof T]: [key, T[key]];
  }[keyof T]
>;

/** Получить записи из объекта */
export function getEntries<T extends {}, R = Entries<T>>(value: T): R {
  return (Object.entries(value) as unknown) as R;
}
