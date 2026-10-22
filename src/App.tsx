import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowDown, ChevronRight, Flame, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { MENU_CATEGORIES, type MenuDish, type MenuPrice } from './data/menuData';

const WHATSAPP_NUMBER = '51961070686';

interface CartItem {
  id: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
}

const money = (amount: number) => 'S/ ' + amount.toFixed(2);

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [expandedDish, setExpandedDish] = useState<string | null>(null);
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);

  const addToCart = (dish: MenuDish, price: MenuPrice) => {
    const id = dish.name + '-' + price.label;
    setCart(current => {
      const existing = current.find(item => item.id === id);
      if (existing) return current.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { id, name: dish.name, size: price.label, price: price.price, quantity: 1 }];
    });
    setExpandedDish(null);
  };

  const updateQuantity = (id: string, amount: number) => {
    setCart(current => current
      .map(item => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
      .filter(item => item.quantity > 0));
  };

  const sendOrder = () => {
    const lines = cart.map(item => '• ' + item.quantity + ' × ' + item.name + ' (' + item.size + ') — ' + money(item.price * item.quantity));
    const message = '*Hola La Terraza, quiero hacer este pedido:*\n\n' + lines.join('\n') + '\n\n*Total: ' + money(total) + '*';
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
  };

  const goToMenu = () => document.getElementById('carta')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="site-shell">
      <div className="topline"><span><Flame size={14} /> PIZZERÍA FUSIÓN · HORNO DE LEÑA</span><span className="topline-right">Delivery <a href="https://wa.me/51961070686">961 070 686</a></span></div>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="La Terraza, inicio">
          <span className="brand-mark"><Flame size={25} fill="currentColor" /></span>
          <span className="brand-name">La Terraza<span>PIZZAS Y PASTAS A LA LEÑA</span></span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#carta">La carta</a><a href="#promocion">Promoción</a><a href="#tradicion">Nuestra tradición</a>
        </nav>
        <button className="header-order" onClick={() => setShowCart(true)}><ShoppingBag size={17} /> Mi pedido{cartCount > 0 && <span className="header-count">{cartCount}</span>}</button>
      </header>

      <main id="inicio">
        <section className="hero-wrap">
          <div className="hero">
            <img className="hero-image" src="/la-terraza-hero.png" alt="Pizza recién horneada frente al horno de leña" />
            <div className="hero-shade" />
            <div className="hero-copy">
              <span className="eyebrow"><i /> SABOR QUE SE SIENTE EN CADA BOCADO</span>
              <h1>Pizzas hechas con pasión,<br /><em>para compartir en familia.</em></h1>
              <p>Masa artesanal, ingredientes generosos y el toque inconfundible de nuestro horno de leña.</p>
              <div className="hero-actions">
                <button className="button-primary" onClick={goToMenu}>Explorar la carta <ArrowDown size={17} /></button>
                <span className="hero-note"><Flame size={16} /> Horneadas al momento</span>
              </div>
            </div>
            <div className="hero-stamp"><span>DESDE</span><strong>S/ 18</strong><small>pizzas personales</small></div>
            <div className="hero-caption">MASA ARTESANAL <b>·</b> HORNO DE LEÑA <b>·</b> 100% FRESCA</div>
          </div>
        </section>

        <section className="promo-banner" id="promocion">
          <div className="promo-icon"><Flame size={26} /></div>
          <div className="promo-copy"><span>DE LUNES A JUEVES</span><h2>Dos pizzas familiares por S/ 50</h2><p>Compra una pizza familiar La Terraza y llévate una Americana o Hawaiana familiar gratis.</p></div>
          <span className="promo-label">¡PARA COMPARTIR!</span>
        </section>

        <section className="menu-intro" id="carta">
          <div><span className="eyebrow eyebrow-dark"><i /> RECIÉN SALIDO DEL HORNO</span><h2>Encuentra tu <em>favorita.</em></h2><p>Elige el tamaño que mejor va con tu mesa.</p></div>
          <div className="size-legend"><span><b>PERSONAL</b>1–2 personas</span><span><b>FAMILIAR</b>3–4 personas</span><span><b>XL</b>4–6 personas</span></div>
        </section>

        <nav className="category-nav" aria-label="Categorías de la carta">
          {MENU_CATEGORIES.map(category => <a key={category.id} href={'#' + category.id}>{category.name}</a>)}
        </nav>

        <div className="menu-sections">
          {MENU_CATEGORIES.map((category, categoryIndex) => (
            <section className="menu-section" id={category.id} key={category.id}>
              <div className="section-heading"><span className="section-index">0{categoryIndex + 1}</span><div><h3>{category.name}</h3><p>{category.intro}</p></div><span className="heading-rule" /></div>
              <div className="dish-grid">
                {category.dishes.map((dish, dishIndex) => {
                  const key = category.id + '-' + dishIndex;
                  const isPizza = dish.prices.length > 1;
                  const expanded = expandedDish === key;
                  return <motion.article key={key} className={'dish-card' + (expanded ? ' dish-card-open' : '')} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-20px' }} transition={{ duration: 0.28, delay: (dishIndex % 4) * 0.035 }}>
                    <div className="dish-number">{String(dishIndex + 1).padStart(2, '0')}</div>
                    <div className="dish-body"><div className="dish-title-row"><h4>{dish.name}</h4>{categoryIndex === 0 && dishIndex === 0 && <span className="dish-tag">DE LA CASA</span>}</div><p>{dish.description}</p>
                      {isPizza ? <>
                        <div className="dish-price-line"><span>Desde <strong>{money(dish.prices[0].price)}</strong></span><button className="choose-size" aria-expanded={expanded} aria-label={(expanded ? 'Ocultar tamaños de ' : 'Ver tamaños de ') + dish.name} onClick={() => setExpandedDish(expanded ? null : key)}>{expanded ? <><X size={15} /> Cerrar</> : <><Plus size={16} /> Ver tamaños</>}</button></div>
                        <AnimatePresence initial={false}>{expanded && <motion.div className="size-options" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                          {dish.prices.map(price => <button key={price.label} onClick={() => addToCart(dish, price)}><span>{price.label}</span><strong>{money(price.price)}</strong><Plus size={14} /></button>)}
                        </motion.div>}</AnimatePresence>
                      </> : <div className="dish-price-line"><span><strong>{money(dish.prices[0].price)}</strong></span><button className="add-single" onClick={() => addToCart(dish, dish.prices[0])} aria-label={'Agregar ' + dish.name}><Plus size={17} /></button></div>}
                    </div>
                  </motion.article>;
                })}
              </div>
            </section>
          ))}
        </div>

        <section className="tradition" id="tradicion"><div className="tradition-icon"><Flame size={28} fill="currentColor" /></div><div><span>EL SECRETO ESTÁ EN EL FUEGO</span><h2>Al horno de leña</h2><p>Tradición artesanal y sabor que se siente en cada bocado.</p></div><a href="https://wa.me/51961070686">Pide por delivery <ChevronRight size={18} /></a></section>
      </main>

      <footer className="site-footer"><a className="footer-brand" href="#inicio"><Flame size={19} fill="currentColor" /> La Terraza</a><span>Pizzería Fusión · Pizzas y pastas a la leña</span><a href="https://wa.me/51961070686">Delivery · 961 070 686</a></footer>

      <AnimatePresence>
        {cartCount > 0 && !showCart && <motion.button className="cart-float" initial={{ y: 90 }} animate={{ y: 0 }} exit={{ y: 90 }} onClick={() => setShowCart(true)}><span className="cart-float-icon"><ShoppingBag size={20} /><i>{cartCount}</i></span><span className="cart-float-text"><small>Tu pedido</small><strong>{money(total)}</strong></span><span className="cart-float-action">Ver pedido <ChevronRight size={17} /></span></motion.button>}
      </AnimatePresence>

      <AnimatePresence>
        {showCart && <motion.div className="cart-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={event => { if (event.target === event.currentTarget) setShowCart(false); }}>
          <motion.aside className="cart-panel" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 28, stiffness: 260 }} aria-label="Tu pedido" aria-modal="true" role="dialog">
            <div className="cart-head"><div><span>LA TERRAZA</span><h2>Tu pedido</h2></div><button className="close-cart" onClick={() => setShowCart(false)} aria-label="Cerrar pedido"><X size={20} /></button></div>
            {cart.length === 0 ? <div className="empty-cart"><ShoppingBag size={34} /><p>Tu pedido está esperando algo rico.</p><button onClick={() => { setShowCart(false); goToMenu(); }}>Ver la carta</button></div> : <>
              <div className="cart-items">{cart.map(item => <div className="cart-item" key={item.id}><div className="cart-item-info"><strong>{item.name}</strong><span>{item.size} · {money(item.price)}</span></div><div className="quantity-control"><button onClick={() => updateQuantity(item.id, -1)} aria-label={'Quitar uno de ' + item.name}><Minus size={14} /></button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, 1)} aria-label={'Agregar uno de ' + item.name}><Plus size={14} /></button></div><button className="remove-item" onClick={() => updateQuantity(item.id, -item.quantity)} aria-label={'Eliminar ' + item.name}><Trash2 size={16} /></button></div>)}</div>
              <div className="cart-total"><span>Total</span><strong>{money(total)}</strong></div><button className="whatsapp-button" onClick={sendOrder}>Pedir por WhatsApp <ChevronRight size={19} /></button>
            </>}
          </motion.aside>
        </motion.div>}
      </AnimatePresence>
    </div>
  );
}
