import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5511947883073"; // Número no formato internacional
  const message = "Olá, gostaria de fazer um orçamento com vocês da W.S Casa das Máquinas";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
    </button>
  );
};

export default WhatsAppButton;
