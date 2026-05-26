"use client"

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

const tasks = [
  { id: 1, title: "Implementar autenticación", project: "E-commerce Platform", status: "En progreso", priority: "Alta", assignee: "María García", dueDate: "2025-11-15" },
  { id: 2, title: "Diseñar pantalla móvil", project: "Mobile App", status: "Pendiente", priority: "Media", assignee: "Ana López", dueDate: "2025-11-20" },
  { id: 3, title: "Configurar CI/CD", project: "API Gateway", status: "Completado", priority: "Alta", assignee: "Carlos Ruiz", dueDate: "2025-11-10" },
]

const statusVariant = (status: string) => {
  switch (status) {
    case "Completado": return "bg-brand-soft text-white"
    case "En progreso": return "bg-brand-mid text-white"
    default: return "bg-gray-400 text-white"
  }
}

const priorityVariant = (priority: string) => {
  switch (priority) {
    case "Alta": return "bg-red-500 text-white"
    case "Media": return "bg-yellow-500 text-white"
    default: return "bg-blue-500 text-white"
  }
}

export function TasksTable() {
  return (
    <>
      <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <Table>
          <TableCaption className="text-gray-500">Lista de tareas activas</TableCaption>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[40px]"></TableHead>
              <TableHead className="font-semibold text-brand-dark">Tarea</TableHead>
              <TableHead className="font-semibold text-brand-dark">Proyecto</TableHead>
              <TableHead className="font-semibold text-brand-dark">Estado</TableHead>
              <TableHead className="font-semibold text-brand-dark">Prioridad</TableHead>
              <TableHead className="font-semibold text-brand-dark">Asignado a</TableHead>
              <TableHead className="font-semibold text-brand-dark">Fecha</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id} className="hover:bg-brand-mint/5 transition-colors">
                <TableCell><Checkbox className="rounded border-gray-300" /></TableCell>
                <TableCell className="font-medium text-gray-800">{task.title}</TableCell>
                <TableCell>{task.project}</TableCell>
                <TableCell><Badge className={`${statusVariant(task.status)} rounded-full px-2 py-0.5`}>{task.status}</Badge></TableCell>
                <TableCell><Badge className={`${priorityVariant(task.priority)} rounded-full px-2 py-0.5`}>{task.priority}</Badge></TableCell>
                <TableCell>{task.assignee}</TableCell>
                <TableCell>{task.dueDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="p-4 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem><PaginationPrevious href="#" className="text-brand-dark hover:bg-brand-mint/20 rounded-lg" /></PaginationItem>
            <PaginationItem><PaginationLink href="#" className="text-brand-dark hover:bg-brand-mint/20 rounded-lg">1</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#" className="text-brand-dark hover:bg-brand-mint/20 rounded-lg">2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#" className="text-brand-dark hover:bg-brand-mint/20 rounded-lg">3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationNext href="#" className="text-brand-dark hover:bg-brand-mint/20 rounded-lg" /></PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  )
}