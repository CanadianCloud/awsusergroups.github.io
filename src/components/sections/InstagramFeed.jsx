import React from "react";

export default function InstagramFeed() {
  // Placeholder posts - en producción estos vendrían de la API de Instagram
  const instagramPosts = Array(8).fill(null).map((_, index) => ({
    id: index,
    imageUrl: `https://placehold.co/400x400/ff9900/ffffff/png?text=Post+${index + 1}`,
    link: "https://www.instagram.com/canadiancloudninja/"
  }));

  return (
    <section id="instagram" className="py-12 sm:py-16 md:py-20 bg-white cursor-pointer">
      <div className="w-full">
        {/* Grid de 2 filas x 4 columnas - Pantalla completa */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {instagramPosts.map((post, index) => (
            index === 0 ? (
              <div key={index} className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-0">
                {/* === EMBED INSTAGRAM POST 1 === */}
                <div style={{width: '100%', height: '100%'}}>
                  <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DQfkb58gRfL/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin:'1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'99.375%'}}>
                    <div style={{padding:'16px'}}>
                      <a href="https://www.instagram.com/p/DQfkb58gRfL/?utm_source=ig_embed&amp;utm_campaign=loading" style={{background:'#FFFFFF', lineHeight:0, padding:'0 0', textAlign:'center', textDecoration:'none', width:'100%'}} target="_blank" rel="noopener noreferrer">
                        {/* ...SVG y contenido omitido por brevedad... */}
                        Ver esta publicación en Instagram
                      </a>
                    </div>
                  </blockquote>
                  <script async src="//www.instagram.com/embed.js"></script>
                </div>
              </div>
            ) : index === 1 ? (
              <div key={index} className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-0">
                {/* === EMBED INSTAGRAM POST 2 === */}
                <div style={{width: '100%', height: '100%'}}>
                  <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DG3okjHyu-F/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin:'1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'99.375%'}}>
                    <div style={{padding:'16px'}}>
                      <a href="https://www.instagram.com/p/DG3okjHyu-F/?utm_source=ig_embed&amp;utm_campaign=loading" style={{background:'#FFFFFF', lineHeight:0, padding:'0 0', textAlign:'center', textDecoration:'none', width:'100%'}} target="_blank" rel="noopener noreferrer">
                        {/* ...SVG y contenido omitido por brevedad... */}
                        Ver esta publicación en Instagram
                      </a>
                    </div>
                  </blockquote>
                  <script async src="//www.instagram.com/embed.js"></script>
                </div>
              </div>
            ) : index === 2 ? (
              <div key={index} className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-0">
                {/* === EMBED INSTAGRAM POST 3 === */}
                <div style={{width: '100%', height: '100%'}}>
                  <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DGWmiV7SEKh/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin:'1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'99.375%'}}>
                    <div style={{padding:'16px'}}>
                      <a href="https://www.instagram.com/p/DGWmiV7SEKh/?utm_source=ig_embed&amp;utm_campaign=loading" style={{background:'#FFFFFF', lineHeight:0, padding:'0 0', textAlign:'center', textDecoration:'none', width:'100%'}} target="_blank" rel="noopener noreferrer">
                        {/* ...SVG y contenido omitido por brevedad... */}
                        Ver esta publicación en Instagram
                      </a>
                    </div>
                  </blockquote>
                  <script async src="//www.instagram.com/embed.js"></script>
                </div>
              </div>
            ) : index === 3 ? (
              <div key={index} className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-0">
                {/* === EMBED INSTAGRAM POST 4 === */}
                <div style={{width: '100%', height: '100%'}}>
                  <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DGWl7uOSjEq/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin:'1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'99.375%'}}>
                    <div style={{padding:'16px'}}>
                      <a href="https://www.instagram.com/p/DGWl7uOSjEq/?utm_source=ig_embed&amp;utm_campaign=loading" style={{background:'#FFFFFF', lineHeight:0, padding:'0 0', textAlign:'center', textDecoration:'none', width:'100%'}} target="_blank" rel="noopener noreferrer">
                        {/* ...SVG y contenido omitido por brevedad... */}
                        Ver esta publicación en Instagram
                      </a>
                    </div>
                  </blockquote>
                  <script async src="//www.instagram.com/embed.js"></script>
                </div>
              </div>
            ) : index === 4 ? (
              <div key={index} className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-0">
                {/* === EMBED INSTAGRAM POST 5 === */}
                <div style={{width: '100%', height: '100%'}}>
                  <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DGWkOW2ywJQ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin:'1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'99.375%'}}>
                    <div style={{padding:'16px'}}>
                      <a href="https://www.instagram.com/p/DGWkOW2ywJQ/?utm_source=ig_embed&amp;utm_campaign=loading" style={{background:'#FFFFFF', lineHeight:0, padding:'0 0', textAlign:'center', textDecoration:'none', width:'100%'}} target="_blank" rel="noopener noreferrer">
                        {/* ...SVG y contenido omitido por brevedad... */}
                        Ver esta publicación en Instagram
                      </a>
                    </div>
                  </blockquote>
                  <script async src="//www.instagram.com/embed.js"></script>
                </div>
              </div>
            ) : index === 5 ? (
              <div key={index} className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-0">
                {/* === EMBED INSTAGRAM POST 6 === */}
                <div style={{width: '100%', height: '100%'}}>
                  <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DGWip4qSHKG/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin:'1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'99.375%'}}>
                    <div style={{padding:'16px'}}>
                      <a href="https://www.instagram.com/p/DGWip4qSHKG/?utm_source=ig_embed&amp;utm_campaign=loading" style={{background:'#FFFFFF', lineHeight:0, padding:'0 0', textAlign:'center', textDecoration:'none', width:'100%'}} target="_blank" rel="noopener noreferrer">
                        {/* ...SVG y contenido omitido por brevedad... */}
                        Ver esta publicación en Instagram
                      </a>
                    </div>
                  </blockquote>
                  <script async src="//www.instagram.com/embed.js"></script>
                </div>
              </div>
            ) : index === 6 ? (
              <div key={index} className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-0">
                {/* === EMBED INSTAGRAM POST 7 === */}
                <div style={{width: '100%', height: '100%'}}>
                  <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DGWiS8gStIW/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin:'1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'99.375%'}}>
                    <div style={{padding:'16px'}}>
                      <a href="https://www.instagram.com/p/DGWiS8gStIW/?utm_source=ig_embed&amp;utm_campaign=loading" style={{background:'#FFFFFF', lineHeight:0, padding:'0 0', textAlign:'center', textDecoration:'none', width:'100%'}} target="_blank" rel="noopener noreferrer">
                        {/* ...SVG y contenido omitido por brevedad... */}
                        Ver esta publicación en Instagram
                      </a>
                    </div>
                  </blockquote>
                  <script async src="//www.instagram.com/embed.js"></script>
                </div>
              </div>
            ) : index === 7 ? (
              <div key={index} className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-0">
                {/* === EMBED INSTAGRAM POST 8 === */}
                <div style={{width: '100%', height: '100%'}}>
                  <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DGB11oHylfK/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{background:'#FFF', border:0, borderRadius:'3px', boxShadow:'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin:'1px', maxWidth:'540px', minWidth:'326px', padding:0, width:'99.375%'}}>
                    <div style={{padding:'16px'}}>
                      <a href="https://www.instagram.com/p/DGB11oHylfK/?utm_source=ig_embed&amp;utm_campaign=loading" style={{background:'#FFFFFF', lineHeight:0, padding:'0 0', textAlign:'center', textDecoration:'none', width:'100%'}} target="_blank" rel="noopener noreferrer">
                        {/* ...SVG y contenido omitido por brevedad... */}
                        Ver esta publicación en Instagram
                      </a>
                    </div>
                  </blockquote>
                  <script async src="//www.instagram.com/embed.js"></script>
                </div>
              </div>
            ) : (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden group cursor-pointer bg-gray-200"
              >
                <img
                  src={post.imageUrl}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <svg 
                    className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
