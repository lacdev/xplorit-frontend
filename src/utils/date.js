import { format, formatDistance } from "date-fns";
import { es } from "date-fns/locale";
const formatDate = (date) => {
  try {
    const result = new Date(date);
    return formatDistance(result, new Date(), {
      addSuffix: true,
      includeSeconds: true,
      locale: es,
    });
  } catch (error) {
    console.log(error);
    return "";
  }
};
const formatCreationDate = (date) => {
  try {
    const result = new Date(date);
    return format(result, "MM/dd/yyyy", { locale: es });
  } catch (error) {
    console.log(error);
    return "";
  }
};
export { formatDate, formatCreationDate };
