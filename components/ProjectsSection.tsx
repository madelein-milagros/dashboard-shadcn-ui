"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

type Project = {
  id: number
  name: string
  description: string
  status: string
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, name: "E-commerce Platform", description: "Tienda online con Next.js y Stripe", status: "En progreso" },
    { id: 2, name: "Mobile App", description: "App React Native con Expo", status: "Completado" },
  ])
  const [newProject, setNewProject] = useState("")
  const [editingId, setEditingId] = useState<number | null>(null)

  const addProject = () => {
    if (!newProject.trim()) return
    if (editingId) {
      setProjects(projects.map((p) => (p.id === editingId ? { ...p, name: newProject } : p)))
      setEditingId(null)
    } else {
      const project: Project = { id: Date.now(), name: newProject, description: "Nuevo proyecto", status: "Pendiente" }
      setProjects([...projects, project])
    }
    setNewProject("")
  }

  const deleteProject = (id: number) => setProjects(projects.filter((p) => p.id !== id))

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En progreso": return "bg-brand-mid text-white"
      case "Completado": return "bg-brand-soft text-white"
      default: return "bg-gray-400 text-white"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          placeholder="Nombre del proyecto..."
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
          className="flex-1 rounded-xl border-gray-200 focus:border-brand-soft focus:ring-brand-soft"
        />
        <Button onClick={addProject} className="bg-brand-button hover:bg-brand-dark text-white rounded-xl px-6 shadow-sm">
          {editingId ? "✏️ Actualizar" : "➕ Agregar"}
        </Button>
        {editingId && (
          <Button variant="ghost" onClick={() => { setEditingId(null); setNewProject("") }} className="text-brand-midDark">
            Cancelar
          </Button>
        )}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <Card key={project.id} className="rounded-2xl border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="h-1.5 w-full bg-brand-mint"></div>
            <CardHeader>
              <CardTitle className="text-brand-dark text-xl">{project.name}</CardTitle>
              <CardDescription className="text-gray-600">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge className={`${getStatusColor(project.status)} rounded-full px-3 py-1 font-normal`}>
                {project.status}
              </Badge>
              <div className="mt-5 flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => { setNewProject(project.name); setEditingId(project.id) }}
                  className="rounded-xl border-brand-soft text-brand-midDark hover:bg-brand-mint/20 flex-1"
                >
                  Editar
                </Button>
                <Button
                  onClick={() => deleteProject(project.id)}
                  className="rounded-xl bg-red-400 hover:bg-red-500 text-white flex-1 shadow-sm"
                >
                  Eliminar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}