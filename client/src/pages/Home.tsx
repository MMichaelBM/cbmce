import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, CheckCircle } from 'lucide-react';

/**
 * Design: Minimalismo Institucional Moderno
 * - Paleta neutra com acento verde militar (#2D5016)
 * - Layout em duas colunas: cabeçalho fixo + formulário
 * - Cartões de seção com borda esquerda verde militar
 * - Tipografia: Playfair Display (títulos) + Inter (corpo)
 * - Formulário simplificado: apenas nomes, sem CIA e matrícula
 */

interface FormData {
  data: string;
  diaSemana: string;
  oficialCoordenador: string;
  fiscalDia: string;
  motorista: string;
  chefe1Linha: string;
  auxiliar1Linha: string;
  chefe2Linha: string;
  permanente: string;
  motSalv: string;
  armador01: string;
  armador02: string;
  // Permuta
  cmtSocorro: string;
  motorista51: string;
  chefe1LinhaPermuta: string;
  chefe2LinhaPermuta: string;
  auxiliar1LinhaPermuta: string;
  auxiliar2LinhaPermuta: string;
  permanentePermuta: string;
  motSalvPermuta: string;
  armador01Permuta: string;
  armador02Permuta: string;
  observacoes: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    data: '',
    diaSemana: '',
    oficialCoordenador: '',
    fiscalDia: '',
    motorista: '',
    chefe1Linha: '',
    auxiliar1Linha: '',
    chefe2Linha: '',
    permanente: '',
    motSalv: '',
    armador01: '',
    armador02: '',
    cmtSocorro: '',
    motorista51: '',
    chefe1LinhaPermuta: '',
    chefe2LinhaPermuta: '',
    auxiliar1LinhaPermuta: '',
    auxiliar2LinhaPermuta: '',
    permanentePermuta: '',
    motSalvPermuta: '',
    armador01Permuta: '',
    armador02Permuta: '',
    observacoes: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatarParaWhatsApp = (): string => {
    const linhas: string[] = [];
    
    linhas.push('🚒 *ESCALA DE SERVIÇO DO DIA*');
    linhas.push(`📅 *${formData.data} (${formData.diaSemana})*`);
    linhas.push('');
    
    linhas.push('*GUARNIÇÃO DE SERVIÇO*');
    linhas.push(`• *Oficial Coordenador:* ${formData.oficialCoordenador}`);
    linhas.push(`• *Fiscal de Dia/CMT Socorro:* ${formData.fiscalDia}`);
    linhas.push(`• *Motorista ABT-51:* ${formData.motorista}`);
    linhas.push(`• *Chefe da 1ª Linha:* ${formData.chefe1Linha}`);
    linhas.push(`• *Auxiliar da 1ª Linha:* ${formData.auxiliar1Linha}`);
    linhas.push(`• *Chefe da 2ª Linha:* ${formData.chefe2Linha}`);
    linhas.push(`• *Permanente:* ${formData.permanente}`);
    linhas.push(`• *Mot. e CMT do SALV:* ${formData.motSalv}`);
    linhas.push(`• *Armador 01:* ${formData.armador01}`);
    linhas.push(`• *Armador 02:* ${formData.armador02}`);
    
    linhas.push('');
    linhas.push('*PERMUTA*');
    linhas.push(`• *CMT Socorro:* ${formData.cmtSocorro}`);
    linhas.push(`• *Motorista ABT-51:* ${formData.motorista51}`);
    linhas.push(`• *Chefe da 1ª Linha:* ${formData.chefe1LinhaPermuta}`);
    linhas.push(`• *Chefe da 2ª Linha:* ${formData.chefe2LinhaPermuta}`);
    linhas.push(`• *Auxiliar da 1ª Linha:* ${formData.auxiliar1LinhaPermuta}`);
    linhas.push(`• *Auxiliar da 2ª Linha:* ${formData.auxiliar2LinhaPermuta}`);
    linhas.push(`• *Permanente:* ${formData.permanentePermuta}`);
    linhas.push(`• *Mot. e CMT do SALV:* ${formData.motSalvPermuta}`);
    linhas.push(`• *Armador 01:* ${formData.armador01Permuta}`);
    linhas.push(`• *Armador 02:* ${formData.armador02Permuta}`);
    
    if (formData.observacoes.trim()) {
      linhas.push('');
      linhas.push('*OBSERVAÇÕES*');
      linhas.push(formData.observacoes);
    }
    
    return linhas.join('%0A');
  };

  const handleEnviarWhatsApp = () => {
    const mensagem = formatarParaWhatsApp();
    const urlWhatsApp = `https://web.whatsapp.com/send?text=${mensagem}`;
    window.open(urlWhatsApp, '_blank');
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  };

  const diasSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];

  return (
    <div className="min-h-screen bg-white">
      {/* Cabeçalho Institucional */}
      <div className="sticky top-0 z-50 bg-white border-b border-[#E8E8E8] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center gap-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              ESCALA DE SERVIÇO
            </h1>
            <p className="text-sm text-[#666666] mt-1">
              3ª CIA/3º BBM – ITAPIPOCA
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário - Coluna Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Data e Dia da Semana */}
            <div className="bg-[#FAFAF8] border-l-4 border-[#2D5016] p-6 rounded-md space-y-4">
              <h2 className="text-lg font-semibold text-[#1A1A1A]">Informações da Escala</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Data da Escala
                  </label>
                  <Input
                    type="date"
                    value={formData.data}
                    onChange={(e) => handleInputChange('data', e.target.value)}
                    className="border border-[#E8E8E8] rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Dia da Semana
                  </label>
                  <select
                    value={formData.diaSemana}
                    onChange={(e) => handleInputChange('diaSemana', e.target.value)}
                    className="w-full px-3 py-2 border border-[#E8E8E8] rounded-md text-sm text-[#1A1A1A] focus:outline-none focus:border-[#2D5016] focus:ring-1 focus:ring-[#2D5016]"
                  >
                    <option value="">Selecione...</option>
                    {diasSemana.map(dia => (
                      <option key={dia} value={dia}>{dia}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Guarnição de Serviço */}
            <div className="bg-[#FAFAF8] border-l-4 border-[#2D5016] p-6 rounded-md space-y-4">
              <h2 className="text-lg font-semibold text-[#1A1A1A]">Guarnição de Serviço</h2>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Oficial Coordenador
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.oficialCoordenador}
                    onChange={(e) => handleInputChange('oficialCoordenador', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Fiscal de Dia/CMT Socorro
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.fiscalDia}
                    onChange={(e) => handleInputChange('fiscalDia', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Motorista ABT-51
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.motorista}
                    onChange={(e) => handleInputChange('motorista', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Chefe da 1ª Linha
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.chefe1Linha}
                    onChange={(e) => handleInputChange('chefe1Linha', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Auxiliar da 1ª Linha
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.auxiliar1Linha}
                    onChange={(e) => handleInputChange('auxiliar1Linha', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Chefe da 2ª Linha
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.chefe2Linha}
                    onChange={(e) => handleInputChange('chefe2Linha', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Permanente
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.permanente}
                    onChange={(e) => handleInputChange('permanente', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Mot. e CMT do SALV
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.motSalv}
                    onChange={(e) => handleInputChange('motSalv', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Armador 01
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.armador01}
                    onChange={(e) => handleInputChange('armador01', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Armador 02
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.armador02}
                    onChange={(e) => handleInputChange('armador02', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>
              </div>
            </div>

            {/* Permuta */}
            <div className="bg-[#FAFAF8] border-l-4 border-[#2D5016] p-6 rounded-md space-y-4">
              <h2 className="text-lg font-semibold text-[#1A1A1A]">Permuta</h2>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    CMT Socorro
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.cmtSocorro}
                    onChange={(e) => handleInputChange('cmtSocorro', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Motorista ABT-51
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.motorista51}
                    onChange={(e) => handleInputChange('motorista51', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Chefe da 1ª Linha
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.chefe1LinhaPermuta}
                    onChange={(e) => handleInputChange('chefe1LinhaPermuta', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Chefe da 2ª Linha
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.chefe2LinhaPermuta}
                    onChange={(e) => handleInputChange('chefe2LinhaPermuta', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Auxiliar da 1ª Linha
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.auxiliar1LinhaPermuta}
                    onChange={(e) => handleInputChange('auxiliar1LinhaPermuta', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Auxiliar da 2ª Linha
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.auxiliar2LinhaPermuta}
                    onChange={(e) => handleInputChange('auxiliar2LinhaPermuta', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Permanente
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.permanentePermuta}
                    onChange={(e) => handleInputChange('permanentePermuta', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Mot. e CMT do SALV
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.motSalvPermuta}
                    onChange={(e) => handleInputChange('motSalvPermuta', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Armador 01
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.armador01Permuta}
                    onChange={(e) => handleInputChange('armador01Permuta', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Armador 02
                  </label>
                  <Input
                    placeholder="Nome"
                    value={formData.armador02Permuta}
                    onChange={(e) => handleInputChange('armador02Permuta', e.target.value)}
                    className="border border-[#E8E8E8]"
                  />
                </div>
              </div>
            </div>

            {/* Observações */}
            <div className="bg-[#FAFAF8] border-l-4 border-[#2D5016] p-6 rounded-md space-y-4">
              <h2 className="text-lg font-semibold text-[#1A1A1A]">Observações</h2>
              <textarea
                value={formData.observacoes}
                onChange={(e) => handleInputChange('observacoes', e.target.value)}
                placeholder="Digite aqui observações importantes sobre a escala..."
                className="w-full p-3 border border-[#E8E8E8] rounded-md text-sm text-[#1A1A1A] focus:outline-none focus:border-[#2D5016] focus:ring-1 focus:ring-[#2D5016]"
                rows={4}
              />
            </div>

            {/* Botão de Envio */}
            <div className="flex gap-3">
              <Button
                onClick={handleEnviarWhatsApp}
                className="flex-1 bg-[#2D5016] hover:bg-[#1F3810] text-white font-semibold py-3 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar para WhatsApp
              </Button>
            </div>

            {/* Mensagem de Sucesso */}
            {enviado && (
              <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center gap-3 animate-fade-in">
                <CheckCircle size={20} className="text-green-600" />
                <p className="text-green-700 font-medium">
                  Redirecionando para WhatsApp Web...
                </p>
              </div>
            )}
          </div>

          {/* Sidebar - Informações Institucionais */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-[#FAFAF8] border border-[#E8E8E8] p-6 rounded-md space-y-3">
                <h3 className="font-semibold text-[#1A1A1A] text-sm uppercase tracking-wide">
                  Instituição
                </h3>
                <div className="space-y-2 text-sm text-[#666666]">
                  <p><strong>Governo:</strong> Estado do Ceará</p>
                  <p><strong>Órgão:</strong> Secretaria da Segurança Pública e Defesa Social</p>
                  <p><strong>Unidade:</strong> Corpo de Bombeiros Militar</p>
                  <p><strong>Localização:</strong> 3ª CIA/3º BBM – Itapipoca</p>
                </div>
              </div>

              <div className="bg-[#FAFAF8] border border-[#E8E8E8] p-6 rounded-md space-y-3">
                <h3 className="font-semibold text-[#1A1A1A] text-sm uppercase tracking-wide">
                  Instruções
                </h3>
                <ul className="space-y-2 text-sm text-[#666666] list-disc list-inside">
                  <li>Preencha os nomes dos escalados</li>
                  <li>Clique em "Enviar para WhatsApp"</li>
                  <li>Selecione o grupo de destino</li>
                  <li>Confirme o envio no WhatsApp Web</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
