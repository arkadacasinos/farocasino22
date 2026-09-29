import { AdvantagesSection } from '@/components/faro/advantages-section'
import { ContentSection } from '@/components/faro/content-section'
import { FaqSection } from '@/components/faro/faq-section'
import { HeroSection } from '@/components/faro/hero-section'
import { SiteFooter } from '@/components/faro/site-footer'
import { SiteHeader } from '@/components/faro/site-header'

export default function Page() {
  return (
    <div className="fq82-shell">
      <SiteHeader />
      <main className="fq82-main">
        <HeroSection />
        <ContentSection
          id="o-brende"
          title="Что такое бренд Faro Casino"
          paragraphs={[
            'Faro Casino — название, которое закрепилось за классической карточной игрой фаро и площадкой, где в неё можно сыграть онлайн. Слово «faro casino» встречается и в русском варианте — Фаро казино — оба обозначения указывают на один и тот же бренд.',
            'Правила фаро довольно простые: игрок делает ставку на карту, а дальше следит за тем, совпадёт ли она с картами, вскрытыми из колоды. Именно эта простота и привлекает тех, кто впервые слышит про Faro casino.',
          ]}
          image={{
            src: '/images/faro-play.jpg',
            alt: 'Playing cards fanned out next to gold casino chips on a green felt table',
          }}
        />
        <ContentSection
          id="ofitsialnyy"
          title="Официальный сайт Faro Casino"
          paragraphs={[
            'Faro casino официальный сайт — это основной адрес, через который бренд Faro Casino общается с игроками. Именно на официальном сайте публикуются актуальные условия и обновления интерфейса.',
            'Перед тем как вводить какие-либо данные, стоит убедиться, что вы находитесь именно на официальный сайт Фаро казино, а не на стороннем ресурсе, скопировавшем оформление.',
          ]}
          image={{
            src: '/images/faro-hero.jpg',
            alt: 'Dark casino table with golden chips and cards, symbolizing the official Faro Casino site',
          }}
          reverse
        />
        <ContentSection
          id="zerkalo"
          title="Faro casino зеркало: когда оно нужно"
          paragraphs={[
            'Зеркало Фаро казино — это точная копия официального сайта, доступная по другому адресу. Faro casino зеркало создаётся именно для того, чтобы игроки не теряли доступ, если основной домен временно не открывается.',
            'Рабочее зеркало Фаро казино повторяет функциональность оригинала: та же игра, тот же баланс, тот же интерфейс — меняется только адрес в браузере.',
          ]}
          image={{
            src: '/images/faro-mirror.jpg',
            alt: 'Two identical casino table setups with cards and chips, illustrating a mirrored access point',
          }}
        />
        <ContentSection
          id="igrat"
          title="Faro казино играть онлайн: с чего начать"
          paragraphs={[
            'Чтобы начать играть в Фаро казино, достаточно открыть официальный сайт или рабочее зеркало, выбрать стол и ознакомиться с текущим размером ставок. Faro casino играть можно как в ознакомительном, так и в реальном режиме — это удобно для тех, кто только знакомится с игрой.',
            'Если вы решили играть в Faro казино онлайн впервые, начните с небольших ставок: так проще понять темп раздач и логику игры фаро.',
          ]}
          image={{
            src: '/images/faro-play.jpg',
            alt: 'Player about to place a bet with gold chips among a spread of playing cards',
          }}
          reverse
        />
        <AdvantagesSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}
