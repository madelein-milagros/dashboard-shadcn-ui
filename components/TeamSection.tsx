"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Member = {
  id: number
  name: string
  role: string
  status: string
}

export function TeamSection() {
  const [members, setMembers] = useState<Member[]>([
    { id: 1, name: "María García", role: "Frontend Developer", status: "Activo" },
    { id: 2, name: "Juan Pérez", role: "Backend Developer", status: "Ausente" },
  ])
  const [newMember, setNewMember] = useState("")

  const addMember = () => {
    if (!newMember.trim()) return
    const member: Member = { id: Date.now(), name: newMember, role: "Nuevo integrante", status: "Activo" }
    setMembers([...members, member])
    setNewMember("")
  }

  const deleteMember = (id: number) => setMembers(members.filter((m) => m.id !== id))

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          placeholder="Nombre del integrante..."
          value={newMember}
          onChange={(e) => setNewMember(e.target.value)}
          className="flex-1 rounded-xl border-gray-200 focus:border-brand-soft focus:ring-brand-soft"
        />
        <Button onClick={addMember} className="bg-brand-button hover:bg-brand-dark text-white rounded-xl px-6 shadow-sm">
          + Agregar miembro
        </Button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {members.map((member) => (
          <Card key={member.id} className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-brand-dark text-lg">{member.name}</CardTitle>
                <Badge className={member.status === "Activo" ? "bg-brand-soft text-white rounded-full" : "bg-gray-400 text-white rounded-full"}>
                  {member.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">{member.role}</p>
              <Button
                onClick={() => deleteMember(member.id)}
                size="sm"
                className="bg-red-400 hover:bg-red-500 text-white rounded-lg text-sm shadow-sm"
              >
                Eliminar
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}