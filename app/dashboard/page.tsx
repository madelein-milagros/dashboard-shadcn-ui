"use client"
import { ProjectForm } from "@/components/ProjectForm"
import { ProjectsSection } from "@/components/ProjectsSection"
import { TasksTable } from "@/components/TasksTable"
import { CalendarSection } from "@/components/CalendarSection"
import { TeamSection } from "@/components/TeamSection"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Button } from "@/components/ui/button"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f9eb] to-[#e6f3e0] p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* HEADER con estilo */}
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight">
            Dashboard de Proyectos
          </h1>
          <p className="text-brand-midDark text-lg max-w-2xl mx-auto md:mx-0">
            Organiza, sigue y colabora en tus proyectos con un diseño moderno.
          </p>
          <Alert className="mt-4 border-l-4 border-l-brand-soft bg-white/80 backdrop-blur-sm text-brand-dark rounded-2xl shadow-sm">
            <AlertTitle className="font-semibold flex items-center gap-2">✨ Proyecto iniciado</AlertTitle>
            <AlertDescription>El dashboard está funcionando correctamente. ¡Todo listo para trabajar!</AlertDescription>
          </Alert>
        </div>

        <div className="pt-2">
          <ProjectForm />
        </div>

        {/* TABS con diseño de píldoras */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white/70 backdrop-blur-sm border border-brand-mint/30 rounded-full p-1 shadow-sm inline-flex w-full md:w-auto">
            <TabsTrigger value="overview" className="rounded-full data-[state=active]:bg-brand-dark data-[state=active]:text-white px-6">📊 Resumen</TabsTrigger>
            <TabsTrigger value="projects" className="rounded-full data-[state=active]:bg-brand-dark data-[state=active]:text-white px-6">📁 Proyectos</TabsTrigger>
            <TabsTrigger value="team" className="rounded-full data-[state=active]:bg-brand-dark data-[state=active]:text-white px-6">👥 Equipo</TabsTrigger>
            <TabsTrigger value="tasks" className="rounded-full data-[state=active]:bg-brand-dark data-[state=active]:text-white px-6">✅ Tareas</TabsTrigger>
            <TabsTrigger value="settings" className="rounded-full data-[state=active]:bg-brand-dark data-[state=active]:text-white px-6">⚙️ Configuración</TabsTrigger>
          </TabsList>

          {/* OVERVIEW - tarjetas de estadísticas mejoradas */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <Card className="rounded-2xl border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-semibold text-brand-midDark">Total Proyectos</CardTitle>
                  <span className="text-2xl">📊</span>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-brand-dark">12</p>
                  <p className="text-xs text-gray-500 mt-1">+2 este mes</p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-semibold text-brand-midDark">Tareas</CardTitle>
                  <span className="text-2xl">✅</span>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-brand-dark">143</p>
                  <p className="text-xs text-gray-500 mt-1">68 completadas</p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-semibold text-brand-midDark">Miembros</CardTitle>
                  <span className="text-2xl">👥</span>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-brand-dark">8</p>
                  <p className="text-xs text-gray-500 mt-1">+1 invitado</p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-semibold text-brand-midDark">Horas</CardTitle>
                  <span className="text-2xl">⏱️</span>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-brand-dark">324h</p>
                  <p className="text-xs text-gray-500 mt-1">registradas</p>
                </CardContent>
              </Card>
            </div>

            <Card className="rounded-2xl border-0 shadow-md overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-brand-mint/20 to-white">
                <CardTitle className="text-brand-dark">Actividad Reciente</CardTitle>
                <CardDescription>Últimas acciones del equipo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-brand-mint/10 transition-colors">
                  <Avatar className="bg-brand-dark text-white shadow-sm">
                    <AvatarFallback>MG</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-800">María García</p>
                    <p className="text-sm text-gray-500">Completó la tarea "Implementar autenticación"</p>
                  </div>
                  <span className="ml-auto text-xs text-gray-400">hace 2h</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-brand-mint/10 transition-colors">
                  <Avatar className="bg-brand-soft text-white">
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-800">Juan Pérez</p>
                    <p className="text-sm text-gray-500">Actualizó el proyecto "E-commerce Platform"</p>
                  </div>
                  <span className="ml-auto text-xs text-gray-400">hace 5h</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* PROJECTS */}
          <TabsContent value="projects">
            <ProjectsSection />
          </TabsContent>

          {/* TEAM */}
          <TabsContent value="team">
            <TeamSection />
          </TabsContent>

          {/* TASKS */}
          <TabsContent value="tasks">
            <Card className="rounded-2xl border-0 shadow-md overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-brand-mint/20 to-white">
                <CardTitle className="text-brand-dark">Gestión de Tareas</CardTitle>
                <CardDescription>Organiza y asigna tareas a tu equipo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                <TasksTable />
                <CalendarSection />
              </CardContent>
            </Card>
          </TabsContent>

          {/* SETTINGS */}
          <TabsContent value="settings">
            <Card className="rounded-2xl border-0 shadow-md">
              <CardHeader className="bg-gradient-to-r from-brand-mint/20 to-white">
                <CardTitle className="text-brand-dark">Configuración del Sistema</CardTitle>
                <CardDescription>Personaliza tu dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-midDark">Nombre del Proyecto</label>
                  <input className="w-full rounded-xl border-gray-200 p-2.5 focus:border-brand-soft focus:ring-brand-soft transition" placeholder="Dashboard Empresarial" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-midDark">Correo Administrador</label>
                  <input className="w-full rounded-xl border-gray-200 p-2.5 focus:border-brand-soft focus:ring-brand-soft transition" placeholder="admin@empresa.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-midDark">Tema</label>
                  <select className="w-full rounded-xl border-gray-200 p-2.5 focus:border-brand-soft">
                    <option>Claro</option>
                    <option>Oscuro</option>
                  </select>
                </div>
                <div className="pt-4">
                  // Dentro de la sección SETTINGS, reemplaza el Button por:
<Button className="bg-brand-button hover:bg-brand-dark text-white rounded-xl px-8 shadow-sm">
  Guardar Cambios
</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}