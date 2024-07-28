export function formatDate(date: string | Date) {
  return new Date(date).toLocaleString('pt-br', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}
