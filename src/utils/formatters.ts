/**
 * Formata e copia uma citação ou trecho de texto para a área de transferência
 */
export async function copyToClipboard(text: string, reference?: string): Promise<boolean> {
  try {
    const formatted = reference 
      ? `"${text.trim()}"\n— ${reference} (O Livro de Enoque: Códice Celestial)`
      : text.trim();
      
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(formatted);
      return true;
    } else {
      // Fallback para navegadores sem API moderna
      const textarea = document.createElement('textarea');
      textarea.value = formatted;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return true;
    }
  } catch (err) {
    console.error('Erro ao copiar para clipboard:', err);
    return false;
  }
}

/**
 * Formata timestamp para data em português
 */
export function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

