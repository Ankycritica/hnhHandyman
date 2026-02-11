"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrustBar } from "@/components/ui/TrustBar"
import Link from "next/link"

export default function GalleryView({
  sections,
}: {
  sections: { icon: React.ReactNode; title: string; images: string[] }[]
}) {

  function Slider({ images }: { images: string[] }) {
    const [i, setI] = useState(0)

    useEffect(() => {
      if (images.length < 2) return

      const t = setInterval(() => {
        setI(x => (x + 1) % images.length)
      }, 4000)

      return () => clearInterval(t)
    }, [images.length])

    return (
      <div className="g-slider">
        <div
          className="g-track"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {images.map((img, k) => (
            <div key={k} className="g-item">
              <img src={img} className="g-img" alt="" />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              className="g-prev"
              onClick={() =>
                setI(i === 0 ? images.length - 1 : i - 1)
              }
            >❮</button>

            <button
              className="g-next"
              onClick={() =>
                setI((i + 1) % images.length)
              }
            >❯</button>

            <div className="g-dots">
              {images.map((_, d) => (
                <span
                  key={d}
                  className={i === d ? "g-dot g-active" : "g-dot"}
                  onClick={() => setI(d)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <>
      <Header />

      <div className="pt-24 border-b">
        <div className="container mx-auto px-6 py-4 text-sm text-neutral-600 flex gap-2 items-center">
          <Link href="/" className="hover:text-red-600 flex items-center">
          <span className="w-8 h-8 bg-neutral-100 rounded-md flex items-center justify-center text-black shadow-sm">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11.5L12 4l9 7.5" />
            <path d="M9 21V12h6v9" />
            </svg>
            <span className="sr-only">Home</span>
          </span>
          </Link>
          <span>/</span>
          <span className="text-red-600 font-semibold">Gallery</span>
        </div>
      </div>
      <section className="bg-[#faf6ed] border-b">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-[40px] font-bold text-red-700 mb-3">
            Handyman Work Gallery 
          </h1>
          <div className="h-[4px] w-20 bg-yellow-500" />
        </div>
      </section>

      <div className="g-page">

        <div className="g-header">
          <h1 className="g-title">
            Handyman Work Gallery – Home & Commercial Services
          </h1>

          <p className="g-sub">
            Real project photos from our home repair, remodeling, carpentry and maintenance services.
          </p>
        </div>

        <div className="g-grid">
          {sections.map((s, k) => (
            <div key={k} className="g-card">

              {/* ICON + TITLE */}
              <div className="g-head">
                <div className="g-icon">{s.icon}</div>
                <h3 className="g-h3">{s.title}</h3>
              </div>

              <Slider images={s.images} />

            </div>
          ))}
        </div>
    <TrustBar />
    </div>
    <section className="g-cta">
      <h2 className="g-cta-title">
         Ready to Start Your Project?
      </h2>

      <p className="g-cta-text">
        Contact Hand and Hand Handyman today to discuss your project requirements.  
        View our{" "}
        <Link href="/services" className="g-cta-link">
          handyman services
        </Link>{" "}
        or see how we can help with your home repairs, remodeling, and commercial maintenance needs across Virginia, Maryland, and Washington dc.
      </p>

      <Link href="/request-service" className="g-cta-btn">
        Get in Touch →
      </Link>

      <div className="g-cta-line" />

      <div className="g-cta-area">
        CORE SERVICE AREA: VIRGINIA, MARYLAND, WASHINGTON, DC
      </div>
    </section>
    {/* ===== END CTA SECTION ===== */}


    <Footer />


      {/* ===== STYLES ===== */}
      <style jsx global>{`

      .g-page{
        background:#0b0620;
        padding:120px 20px 120px;
      }

      .g-header{
        text-align:center;
        margin-bottom:50px;
      }

      .g-title{
        color:#fff;
        font-size:26px;
        margin-bottom:10px;
      }

      .g-sub{
        color:#cfcfcf;
        max-width:700px;
        margin:auto;
      }

      /* GRID */
      .g-grid{
        max-width:1100px;
        margin:auto;

        display:grid;
        grid-template-columns:1fr 1fr;
        gap:40px;
      }

      /* CARD */
      .g-card{
        background:#111;
        border:2px solid #8e0808;
        border-radius:14px;

        padding:16px;

        display:flex;
        flex-direction:column;
      }

      /* ICON HEADER */
      .g-head{
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-bottom:10px;
      }

      .g-icon{
        font-size:32px;
        margin-bottom:6px;
        background:#8e0808;

        width:48px;
        height:48px;
        border-radius:50%;

        display:flex;
        align-items:center;
        justify-content:center;

        color:white;
      }

      .g-h3{
        color:#f5c400;
        text-align:center;
        margin-bottom:12px;
        font-size:17px;
      }

      /* ===== SLIDER ===== */

      .g-slider{
        position:relative;
        width:100%;
        aspect-ratio:16/9;

        overflow:hidden;
        background: #8e0808;  
        border-radius:10px;
      }

      .g-track{
        display:flex;
        width:100%;
        height:100%;
        transition:transform .6s ease;
      }

      .g-item{
        min-width:100%;
        height:100%;
      }

      .g-img{
        width:100%;
        height:100%;
        object-fit:cover;
      }

      .g-prev,.g-next{
        position:absolute;
        top:50%;
        transform:translateY(-50%);

        background:#f5c400;
        border:none;

        width:28px;
        height:28px;
        cursor:pointer;
        border-radius:50%;
      }

      .g-prev{left:8px}
      .g-next{right:8px}

      .g-dots{
        position:absolute;
        bottom:6px;
        width:100%;
        text-align:center;
      }

      .g-dot{
        width:7px;
        height:7px;
        background: #8e0808;  

        display:inline-block;
        border-radius:50%;
        margin:0 3px;
        cursor:pointer;
      }

      .g-active{
        background:white;
      }

      @media(max-width:900px){
        .g-grid{
          grid-template-columns:1fr;
        }

        .g-page{
          padding:100px 12px 100px;
        }
      }
        /* ===== CTA SECTION ===== */

.g-cta {
  background: #0b0620;
  border-top:1px solid #8e0808;         /* same dark tone */
  text-align: center;
  padding: 70px 20px 60px;
}

.g-cta-title {
  color: #ffffff;
  font-size: 26px;
  margin-bottom: 16px;
}

.g-cta-text {
  color: #d0d0d0;
  max-width: 760px;
  margin: 0 auto 24px;
  line-height: 1.7;
}

.g-cta-link {
  color: #eb2406;
  text-decoration: underline;
}

.g-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;

  background:#8e0808;
  color:white;  
  font-weight: 600;

  padding: 12px 26px;
  border-radius: 8px;

  transition: .2s ease;
  text-decoration: none;
}

.g-cta-btn:hover {
  background:#b10a0a;
}

.g-cta-line {
  width: 80%;
  max-width: 800px;
  height: 2px;

  background: #e9c40f;

  margin: 32px auto 16px;
}

.g-cta-area {
  color: #fbff02;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 15px;
}

/* MOBILE */
@media (max-width: 768px) {
  .g-cta-title {
    font-size: 22px;
  }

  .g-cta {
    padding: 50px 14px 40px;
  }
}


      `}</style>

    </>
  )
}
