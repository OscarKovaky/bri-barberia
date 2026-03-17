import { Barber } from '../models/barber.model';
import { ProductItem } from '../models/product-item.model';
import { Review } from '../models/review.model';
import { ServiceItem } from '../models/service-item.model';

export const BRAND = {
  name: 'Black Steel Barber Studio',
  slogan: 'Tu estilo, bien definido',
  location: 'Chilpancingo de los Bravo',
  whatsapp: '',
  instagram: '@bricipres',
  phone: '',
  email: 'cipres@blacksteelbarber.com'
};

export const WEEK_SCHEDULE = [
  { day: 'Lunes', hours: '10:00 - 20:00' },
  { day: 'Martes', hours: '10:00 - 20:00' },
  { day: 'Miércoles', hours: '10:00 - 20:00' },
  { day: 'Jueves', hours: '10:00 - 21:00' },
  { day: 'Viernes', hours: '10:00 - 21:00' },
  { day: 'Sábado', hours: '09:00 - 19:00' },
  { day: 'Domingo', hours: '10:00 - 15:00' }
];

export const FAQS = [
  { question: '¿Necesito cita para atenderme?', answer: 'Recomendamos reservar para garantizar tu horario, pero aceptamos walk-ins según disponibilidad.' },
  { question: '¿Qué métodos de pago aceptan?', answer: 'Aceptamos efectivo, transferencia y tarjeta dummy en esta versión demo.' },
  { question: '¿Puedo elegir barbero?', answer: 'Sí, en la sección de reserva puedes seleccionar a tu barbero favorito.' },
  { question: '¿Hacen cortes para niños?', answer: 'Sí, contamos con servicio infantil desde 7 años.' }
];

export const PROMOS = [
  { title: 'Martes de Barba', description: '20% off en ritual de barba premium.', code: 'BARBA20' },
  { title: 'Combo Ejecutivo', description: 'Corte + barba + styling con precio especial.', code: 'EJECUTIVO' },
  { title: 'Primera Visita', description: '10% de descuento en tu primer servicio.', code: 'NUEVO10' }
];

export const SERVICES: ServiceItem[] = [
  { id: 'srv-1', name: 'Corte Clásico', category: 'Cabello', durationMin: 40, price: 250, shortDescription: 'Fade preciso con acabado premium.', longDescription: 'Incluye asesoría de estilo, lavado rápido y acabado con producto profesional.', image: 'assets/images/service-1.jpg', featured: true, tags: ['Fade', 'Clásico'] },
  { id: 'srv-2', name: 'Corte + Diseño', category: 'Cabello', durationMin: 55, price: 320, shortDescription: 'Corte urbano con líneas personalizadas.', longDescription: 'Ideal para un look más creativo con diseño lateral o en nuca.', image: 'assets/images/service-2.jpg', featured: true, tags: ['Diseño', 'Urbano'] },
  { id: 'srv-3', name: 'Ritual de Barba', category: 'Barba', durationMin: 35, price: 220, shortDescription: 'Perfilado y toalla caliente.', longDescription: 'Recorte, perfilado con navaja, toalla caliente y aceite nutritivo.', image: 'assets/images/service-3.jpg', featured: true, tags: ['Navaja', 'Toalla caliente'] },
  { id: 'srv-4', name: 'Afeitado Clásico', category: 'Barba', durationMin: 30, price: 210, shortDescription: 'Afeitado tradicional al ras.', longDescription: 'Espuma caliente, navaja y loción calmante para una experiencia old-school.', image: 'assets/images/service-4.jpg', featured: false, tags: ['Tradicional'] },
  { id: 'srv-5', name: 'Camuflaje de Canas', category: 'Rituales', durationMin: 50, price: 380, shortDescription: 'Disimula canas de forma natural.', longDescription: 'Tratamiento tonalizante que mantiene un look elegante y discreto.', image: 'assets/images/service-5.jpg', featured: false, tags: ['Color'] },
  { id: 'srv-6', name: 'Limpieza Facial Express', category: 'Rituales', durationMin: 30, price: 280, shortDescription: 'Renueva y limpia tu piel.', longDescription: 'Exfoliación, mascarilla detox y serum hidratante.', image: 'assets/images/service-6.jpg', featured: false, tags: ['Skincare'] },
  { id: 'srv-7', name: 'Paquete Executive', category: 'Paquetes', durationMin: 80, price: 520, shortDescription: 'Corte + barba + facial express.', longDescription: 'Servicio completo para mantener imagen impecable en una sola visita.', image: 'assets/images/service-7.jpg', featured: true, tags: ['Paquete'] },
  { id: 'srv-8', name: 'Junior Cut', category: 'Cabello', durationMin: 35, price: 190, shortDescription: 'Corte para jóvenes con estilo.', longDescription: 'Corte moderno para niños/adolescentes con terminado limpio.', image: 'assets/images/service-8.jpg', featured: false, tags: ['Junior'] }
];

export const BARBERS: Barber[] = [
  { id: 'brb-1', name: 'Azucena Castro', specialty: 'Skin Fade y Contornos', experienceYears: 9, rating: 4.9, bio: 'Especialista en estilos urbanos con precisión milimétrica.', image: 'assets/images/barber-1.jpg', available: true },
  { id: 'brb-2', name: 'Héctor León', specialty: 'Barba y Afeitado Clásico', experienceYears: 11, rating: 4.8, bio: 'Dominio total de navaja y rituales premium de barba.', image: 'assets/images/barber-2.jpg', available: true },
  { id: 'brb-3', name: 'Alan Cruz', specialty: 'Corte Ejecutivo', experienceYears: 7, rating: 4.7, bio: 'Look profesional y elegante para oficina o eventos.', image: 'assets/images/barber-3.jpg', available: true },
  { id: 'brb-4', name: 'Iván Salgado', specialty: 'Diseño y Estilo Creativo', experienceYears: 6, rating: 4.8, bio: 'Diseños personalizados para destacar tu identidad.', image: 'assets/images/barber-4.jpg', available: false }
];

export const REVIEWS: Review[] = [
  { id: 'rv-1', customerName: 'Luis P.', rating: 5, comment: 'El mejor fade que me han hecho en Morelos. Muy pro.', date: '2026-01-12', avatar: 'LP' },
  { id: 'rv-2', customerName: 'Gerardo M.', rating: 5, comment: 'Excelente atención, ambiente premium y puntualidad.', date: '2026-01-20', avatar: 'GM' },
  { id: 'rv-3', customerName: 'Carlos R.', rating: 4, comment: 'Muy buena experiencia y recomendaciones acertadas.', date: '2026-02-01', avatar: 'CR' },
  { id: 'rv-4', customerName: 'Diego T.', rating: 5, comment: 'La tienda tiene productos top, me llevé una pomada increíble.', date: '2026-02-10', avatar: 'DT' },
  { id: 'rv-5', customerName: 'Mario A.', rating: 5, comment: 'Reservar fue rápido y el resultado excelente.', date: '2026-02-15', avatar: 'MA' },
  { id: 'rv-6', customerName: 'Jorge V.', rating: 4, comment: 'Muy buen servicio, volveré por el paquete executive.', date: '2026-03-01', avatar: 'JV' }
];

export const PRODUCTS: ProductItem[] = [
  { id: 'prd-1', name: 'Pomada Matte Hold', category: 'Pomadas', price: 320, oldPrice: 380, shortDescription: 'Fijación firme sin brillo.', longDescription: 'Pomada base agua para peinados con textura natural y larga duración.', image: 'assets/images/product-1.jpg', stock: 23, featured: true, badge: 'Oferta', benefits: ['Fijación fuerte', 'No deja residuos'], usageMode: 'Aplicar una pequeña cantidad en cabello seco.' },
  { id: 'prd-2', name: 'Pomada Shine Classic', category: 'Pomadas', price: 340, shortDescription: 'Acabado brillante tradicional.', longDescription: 'Ideal para peinados clásicos de alta definición.', image: 'assets/images/product-2.jpg', stock: 16, featured: false, badge: 'Top', benefits: ['Brillo controlado', 'Moldeable'], usageMode: 'Aplicar en cabello ligeramente húmedo.' },
  { id: 'prd-3', name: 'Sea Salt Spray', category: 'Herramientas', price: 290, shortDescription: 'Textura playera y volumen.', longDescription: 'Spray para agregar volumen y movimiento sin rigidez.', image: 'assets/images/product-3.jpg', stock: 18, featured: true, badge: 'Nuevo', benefits: ['Volumen', 'Look natural'], usageMode: 'Rociar antes del secado.' },
  { id: 'prd-4', name: 'Shampoo Detox Pro', category: 'Shampoo', price: 310, shortDescription: 'Limpieza profunda para cuero cabelludo.', longDescription: 'Elimina exceso de grasa y residuos de producto.', image: 'assets/images/product-4.jpg', stock: 30, featured: true, benefits: ['Control de grasa', 'Refrescante'], usageMode: 'Usar 2-3 veces por semana.' },
  { id: 'prd-5', name: 'Shampoo Hidratante', category: 'Shampoo', price: 280, shortDescription: 'Nutrición diaria sin resecar.', longDescription: 'Formulado para cabellos secos o tratados.', image: 'assets/images/product-5.jpg', stock: 25, featured: false, benefits: ['Hidratación', 'Suavidad'], usageMode: 'Aplicar y enjuagar con agua tibia.' },
  { id: 'prd-6', name: 'Aceite para Barba Cedar', category: 'Aceites', price: 360, shortDescription: 'Suaviza y perfuma con notas amaderadas.', longDescription: 'Aceite premium con vitamina E para barba manejable y brillante.', image: 'assets/images/product-6.jpg', stock: 20, featured: true, badge: 'Top', benefits: ['Nutrición', 'Aroma premium'], usageMode: 'Aplicar 3-5 gotas en barba húmeda.' },
  { id: 'prd-7', name: 'Aceite para Barba Citrus', category: 'Aceites', price: 350, shortDescription: 'Ligero y fresco para uso diario.', longDescription: 'Controla frizz en barba y evita resequedad.', image: 'assets/images/product-7.jpg', stock: 14, featured: false, benefits: ['Ligero', 'Control frizz'], usageMode: 'Usar por la mañana y noche.' },
  { id: 'prd-8', name: 'Brocha de Afeitado Premium', category: 'Herramientas', price: 420, shortDescription: 'Espuma uniforme y suave.', longDescription: 'Brocha sintética de alta densidad para afeitado clásico.', image: 'assets/images/product-8.jpg', stock: 10, featured: false, benefits: ['Durable', 'Suavidad'], usageMode: 'Humedecer y aplicar crema de afeitar.' },
  { id: 'prd-9', name: 'Navaja Clásica Steel', category: 'Herramientas', price: 560, shortDescription: 'Precisión profesional.', longDescription: 'Navaja de acero inoxidable para contornos perfectos.', image: 'assets/images/product-9.jpg', stock: 8, featured: false, badge: 'Top', benefits: ['Alta precisión', 'Acero durable'], usageMode: 'Usar con cuchillas nuevas y piel preparada.' },
  { id: 'prd-10', name: 'Bálsamo Post Afeitado', category: 'Skincare', price: 260, shortDescription: 'Calma e hidrata la piel.', longDescription: 'Reduce irritación y enrojecimiento después del afeitado.', image: 'assets/images/product-10.jpg', stock: 35, featured: true, benefits: ['Calmante', 'Sin alcohol'], usageMode: 'Aplicar después del afeitado.' },
  { id: 'prd-11', name: 'Exfoliante Facial Carbon', category: 'Skincare', price: 300, shortDescription: 'Limpieza profunda de poros.', longDescription: 'Exfoliante con carbón activado para piel limpia y fresca.', image: 'assets/images/product-11.jpg', stock: 19, featured: false, badge: 'Nuevo', benefits: ['Detox', 'Control de brillo'], usageMode: 'Usar dos veces por semana.' },
  { id: 'prd-12', name: 'Crema de Peinar Daily', category: 'Pomadas', price: 270, shortDescription: 'Control suave para diario.', longDescription: 'Perfecta para estilos relajados y ordenados.', image: 'assets/images/product-12.jpg', stock: 28, featured: true, benefits: ['Control suave', 'No apelmaza'], usageMode: 'Aplicar en cabello húmedo.' }
];
