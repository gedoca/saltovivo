interface VideoSectionProps {
  title?: string;
  subtitle?: string;
  videoUrl?: string;
}

const VideoSection = ({
  title = "Webinar de Lanzamiento",
  subtitle = "Conocé más sobre El Año del Salto",
  videoUrl = "https://www.youtube.com/watch?v=ApFVAlYT8Dk",
}: VideoSectionProps) => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display spray-tag mb-3">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        <div className="video-container border-4 border-foreground/10 shadow-2xl">
          <iframe
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
