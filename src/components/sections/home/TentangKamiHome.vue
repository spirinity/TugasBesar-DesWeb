<template>
  <section class="bg-cream py-10 md:py-20 px-4 md:px-12">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="relative w-full md:w-[55%] lg:w-[65%] lg:max-w-[806px]">
          <!-- SVG BORDER BACKGROUND (fit to content) -->
          <img
            src="@/assets/vector/vectorborder.svg"
            alt=""
            class="absolute inset-0 w-full h-full pointer-events-none object-fill hidden md:block"
          />

          <!-- CONTENT -->
          <div
            class="relative z-10 px-8 py-12 md:px-16 md:py-16 lg:px-[69px] lg:py-[55px] font-jakarta text-[16px] md:text-[20px] lg:text-[22px] leading-[1.4] md:leading-[1.037] text-text-accent tracking-[-0.5px] md:tracking-[-0.96px] text-center md:text-justify"
          >
            <!-- TITLE -->
            <h2
              class="font-times italic text-[40px] md:text-[50px] lg:text-[64px] mb-4 md:mb-6 text-black tracking-[-1px] md:tracking-[-2.56px] leading-[1.037] text-center md:text-left"
            >
              Tentang Kami
            </h2>
            <p class="mb-4 md:mb-6">
              <span class="font-bold">Elsa Garda Indonesia</span> adalah lembaga konsultasi dan
              bantuan hukum yang berdiri dengan semangat memberikan akses keadilan bagi seluruh
              lapisan masyarakat. Kami hadir untuk membantu masyarakat dalam memahami hak-hak
              hukumnya, memberikan pendampingan profesional, serta menciptakan solusi hukum yang
              adil dan transparan.
            </p>

            <p class="mb-8 hidden md:block">
              Sejak awal berdirinya, lembaga ini berkomitmen untuk menjadi jembatan antara
              masyarakat dan sistem hukum yang sering kali terasa rumit dan tidak terjangkau. Kami
              percaya bahwa keadilan bukanlah hak istimewa bagi sebagian orang, melainkan hak dasar
              setiap warga negara.
            </p>

            <!-- Mobile Image (Visible only on mobile) -->
            <div class="md:hidden flex justify-center my-6">
              <img
                src="@/assets/images/hammer.png"
                alt="Palu Hukum"
                class="w-[180px] h-auto object-contain drop-shadow-xl select-none"
              />
            </div>

            <!-- BUTTON -->
            <div class="flex justify-center md:justify-start">
              <router-link to="/tentang">
                <button 
                  class="w-[180px] md:w-[225px] h-[40px] md:h-[45px] border border-primary border-solid rounded-[15px] bg-transparent font-times font-bold italic text-[20px] md:text-[24px] lg:text-[28px] text-primary hover:bg-primary hover:text-cream transition-all duration-300"
                >
                  Lebih Lanjut →
                </button>
              </router-link>
            </div>
          </div>
        </div>

        <!-- BAGIAN GAMBAR PALU (Desktop Only) -->
        <div class="hidden md:flex justify-center md:justify-start flex-1">
          <img
            src="@/assets/images/hammer.png"
            alt="Palu Hukum"
            class="w-full max-w-[600px] md:max-w-[550px] lg:max-w-[650px] h-auto object-contain drop-shadow-xl select-none"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
