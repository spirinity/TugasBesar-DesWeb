<template>
  <section class="bg-cream py-20 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="relative max-w-[806px] flex-shrink-0">
          <!-- SVG BORDER BACKGROUND (fit to content) -->
          <img
            src="@/assets/vector/vectorborder.svg"
            alt=""
            class="absolute inset-0 w-full h-full pointer-events-none object-fill"
          />

          <!-- CONTENT -->
          <div
            class="relative z-10 px-[69px] py-[55px] font-jakarta text-[24px] leading-[1.037] text-text-accent tracking-[-0.96px] text-justify"
          >
            <!-- TITLE -->
            <h2
              class="font-times italic text-[64px] mb-6 text-black tracking-[-2.56px] leading-[1.037]"
            >
              Tentang Kami
            </h2>
            <p class="mb-6">
              <span class="font-bold">Elsa Garda Indonesia</span> adalah lembaga konsultasi dan
              bantuan hukum yang berdiri dengan semangat memberikan akses keadilan bagi seluruh
              lapisan masyarakat. Kami hadir untuk membantu masyarakat dalam memahami hak-hak
              hukumnya, memberikan pendampingan profesional, serta menciptakan solusi hukum yang
              adil dan transparan.
            </p>

            <p class="mb-8">
              Sejak awal berdirinya, lembaga ini berkomitmen untuk menjadi jembatan antara
              masyarakat dan sistem hukum yang sering kali terasa rumit dan tidak terjangkau. Kami
              percaya bahwa keadilan bukanlah hak istimewa bagi sebagian orang, melainkan hak dasar
              setiap warga negara.
            </p>

            <!-- BUTTON -->
            <button
              class="w-[225px] h-[45px] border border-primary border-solid rounded-[15px] bg-transparent font-times font-bold italic text-[28px] text-primary hover:bg-primary hover:text-cream transition-all duration-300"
            >
              Lebih Lanjut →
            </button>
          </div>
        </div>

        <!-- BAGIAN GAMBAR PALU -->
        <div class="flex justify-center md:justify-start flex-1">
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
