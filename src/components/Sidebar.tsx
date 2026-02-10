import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Play } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  imageUrl: string;
}

interface AgendaItem {
  id: number;
  date: string;
  title: string;
}

interface PodcastItem {
  id: number;
  title: string;
}

interface SidebarProps {
  newsItems: NewsItem[];
  agendaItems: AgendaItem[];
  podcasts: PodcastItem[];
}

export function Sidebar({ newsItems, agendaItems, podcasts }: SidebarProps) {
  return (
    <aside className="sidebar">
      {/* ActualitＴ */}
      <div className="sidebar-card">
        <h3 className="sidebar-card__title">
          Actualités
        </h3>
        <div className="sidebar-list">
          {newsItems.map((item) => (
            <div key={item.id} className="sidebar-item">
              <div className="sidebar-item__media">
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.title}
                  className="sidebar-item__image"
                />
              </div>
              <p className="sidebar-item__text line-clamp-3">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Revue de presse / Abonnement */}


      {/* Agenda */}
      <div className="sidebar-card">
        <h3 className="sidebar-card__title">
          <Calendar className="sidebar-card__icon" />
          Agenda
        </h3>
        <div className="sidebar-agenda">
          {agendaItems.map((item) => (
            <div
              key={item.id}
              className="sidebar-agenda__item"
            >
              <div className="sidebar-agenda__date">
                {item.date}
              </div>
              <p className="sidebar-agenda__title">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Podcasts */}
      <div className="sidebar-card">
        <h3 className="sidebar-card__title">
          Informations suppléntaires
        </h3>
        <div className="sidebar-podcast">
          {podcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="sidebar-podcast__item"
            >
              <div className="sidebar-podcast__icon">
                <Play className="sidebar-podcast__icon-svg" />
              </div>
              <p className="sidebar-podcast__text">
                {podcast.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
