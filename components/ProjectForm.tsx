"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ProjectForm() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    priority: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("✅ Proyecto creado correctamente")
    setFormData({ name: "", description: "", category: "", priority: "" })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-brand-button hover:bg-brand-dark text-white shadow-md transition-all duration-200 hover:shadow-lg">
          + Nuevo Proyecto
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-2xl border-none shadow-2xl">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-brand-dark text-2xl">Crear Nuevo Proyecto</DialogTitle>
            <DialogDescription>Completa los datos del proyecto</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-brand-midDark font-medium">Nombre del Proyecto</Label>
              <Input
                id="name"
                placeholder="Mi Proyecto"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-gray-200 focus:border-brand-soft focus:ring-brand-soft rounded-xl"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description" className="text-brand-midDark font-medium">Descripción</Label>
              <Input
                id="description"
                placeholder="Descripción del proyecto"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="border-gray-200 focus:border-brand-soft focus:ring-brand-soft rounded-xl"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category" className="text-brand-midDark font-medium">Categoría</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                <SelectTrigger className="rounded-xl border-gray-200">
                  <SelectValue placeholder="Selecciona categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web">Web</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                  <SelectItem value="design">Diseño</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="priority" className="text-brand-midDark font-medium">Prioridad</Label>
              <Select value={formData.priority} onValueChange={(value) => setFormData({ ...formData, priority: value })}>
                <SelectTrigger className="rounded-xl border-gray-200">
                  <SelectValue placeholder="Selecciona prioridad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Baja</SelectItem>
                  <SelectItem value="medium">Media</SelectItem>
                  <SelectItem value="high">Alta</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="rounded-xl border-gray-300">
              Cancelar
            </Button>
            <Button type="submit" className="bg-brand-button hover:bg-brand-dark text-white rounded-xl shadow-sm">
              Crear Proyecto
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}