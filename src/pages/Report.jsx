import { useState } from 'react';
import { Upload, AlertTriangle, Phone, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

const Report = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    lastSeenDate: '',
    lastSeenTime: '',
    location: '',
    description: '',
    clothing: '',
    characteristics: '',
    circumstances: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    relationship: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.age || !formData.lastSeenDate || !formData.contactPhone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would submit to an API
    toast({
      title: "Relatório enviado",
      description: "Seu relatório foi enviado com sucesso. Nossa equipe entrará em contato.",
    });

    // Reset form
    setFormData({
      name: '',
      age: '',
      gender: '',
      lastSeenDate: '',
      lastSeenTime: '',
      location: '',
      description: '',
      clothing: '',
      characteristics: '',
      circumstances: '',
      contactName: '',
      contactPhone: '',
      contactEmail: '',
      relationship: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Reportar Pessoa Desaparecida
          </h1>
          <p className="text-gray-600 mt-2">
            Preencha as informações abaixo para registrar o desaparecimento
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Emergency Alert */}
        <Alert className="mb-8 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <strong>Em caso de emergência, ligue imediatamente para 190.</strong>
            <br />
            Este formulário é para casos não urgentes ou para complementar um boletim de ocorrência já registrado.
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Person Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Info className="h-5 w-5" />
                <span>Informações da Pessoa Desaparecida</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Nome completo da pessoa desaparecida"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">Idade *</Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    placeholder="Idade"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Gênero</Label>
                  <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o gênero" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Masculino</SelectItem>
                      <SelectItem value="female">Feminino</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefere não informar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastSeenDate">Data do Último Avistamento *</Label>
                  <Input
                    id="lastSeenDate"
                    type="date"
                    value={formData.lastSeenDate}
                    onChange={(e) => handleInputChange('lastSeenDate', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastSeenTime">Horário Aproximado</Label>
                  <Input
                    id="lastSeenTime"
                    type="time"
                    value={formData.lastSeenTime}
                    onChange={(e) => handleInputChange('lastSeenTime', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Local do Último Avistamento</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="Endereço ou local específico"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição Física</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Altura, peso, cor dos olhos, cor do cabelo, etc."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="clothing">Roupas no Último Avistamento</Label>
                <Textarea
                  id="clothing"
                  value={formData.clothing}
                  onChange={(e) => handleInputChange('clothing', e.target.value)}
                  placeholder="Descreva as roupas que a pessoa estava usando"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="characteristics">Características Distintivas</Label>
                <Textarea
                  id="characteristics"
                  value={formData.characteristics}
                  onChange={(e) => handleInputChange('characteristics', e.target.value)}
                  placeholder="Cicatrizes, tatuagens, sinais, deficiências, etc."
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="circumstances">Circunstâncias do Desaparecimento</Label>
                <Textarea
                  id="circumstances"
                  value={formData.circumstances}
                  onChange={(e) => handleInputChange('circumstances', e.target.value)}
                  placeholder="Descreva as circunstâncias em que a pessoa desapareceu"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Photo Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="h-5 w-5" />
                <span>Foto da Pessoa</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">
                  Clique para fazer upload ou arraste uma foto aqui
                </p>
                <p className="text-sm text-gray-500">
                  PNG, JPG até 10MB (opcional, mas recomendado)
                </p>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="photo-upload"
                />
                <Label htmlFor="photo-upload" className="cursor-pointer">
                  <Button type="button" variant="outline" className="mt-4">
                    Selecionar Foto
                  </Button>
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Informações de Contato</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Seu Nome *</Label>
                  <Input
                    id="contactName"
                    value={formData.contactName}
                    onChange={(e) => handleInputChange('contactName', e.target.value)}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="relationship">Seu Relacionamento com a Pessoa</Label>
                  <Select value={formData.relationship} onValueChange={(value) => handleInputChange('relationship', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="parent">Pai/Mãe</SelectItem>
                      <SelectItem value="sibling">Irmão/Irmã</SelectItem>
                      <SelectItem value="spouse">Cônjuge</SelectItem>
                      <SelectItem value="child">Filho/Filha</SelectItem>
                      <SelectItem value="relative">Outro Familiar</SelectItem>
                      <SelectItem value="friend">Amigo/Amiga</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Telefone *</Label>
                  <Input
                    id="contactPhone"
                    value={formData.contactPhone}
                    onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline">
              Salvar Rascunho
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Enviar Relatório
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Report;
