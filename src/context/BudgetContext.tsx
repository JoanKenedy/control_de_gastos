// Importa funciones y tipos de React necesarios para el contexto y el manejo de estado
import { createContext, Dispatch, ReactNode, useMemo, useReducer } from "react";
// Importa el reducer, tipos de acciones, tipo de estado y el estado inicial del presupuesto
import {
  BudgetActions,
  budgetReducer,
  BudgetState,
  initialState,
} from "../reducers/budget-reducer";

// Define la forma que tendrá el contexto: el estado actual y la función dispatch para enviar acciones
type BudgetContextProps = {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>;
  totalExpenses: number;
  remainingBudget: number;
};

// Define el tipo de las props que recibirá el proveedor: cualquier nodo React como hijo
type BudgetProviderProps = {
  children: ReactNode;
};

// Crea el contexto con el tipo definido. Se inicializa con `null!` para evitar error de tipo (aunque se puede mejorar)
export const BudgetContext = createContext<BudgetContextProps>(null!);

// Componente proveedor del contexto
export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  // Se inicializa el estado y la función dispatch usando el reducer y el estado inicial
  const [state, dispatch] = useReducer(budgetReducer, initialState);
 const totalExpenses = useMemo(
   () => state.expenses.reduce((total, expense) => expense.amount + total, 0),
   [state.expenses]
 );
 const remainingBudget = state.budget - totalExpenses;
  // El proveedor envuelve a sus hijos y les proporciona el estado y dispatch mediante el contexto
  return (
    <BudgetContext.Provider
      value={{
        state, // Estado actual del presupuesto
        dispatch, // Función para modificar el estado mediante acciones
        totalExpenses,
        remainingBudget
     
      }}
    >
      {children}{" "}
      {/* Renderiza los componentes hijos que estarán dentro del proveedor */}
    </BudgetContext.Provider>
  );
};
