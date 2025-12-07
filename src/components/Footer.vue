<template>
  <footer class="bg-[#05356b] w-full py-10 px-6 md:py-[97px] md:px-[148px]">
    <div class="max-w-[1440px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:mb-[52px]">
        
        <!-- Logo & Contact Info -->
        <div class="space-y-6 md:space-y-[17px]">
          <!-- Logo Section -->
          <div class="flex items-center justify-center md:justify-start gap-[10px] mb-4 md:mb-7">
            <div class="w-[60px] h-[60px] md:w-[78px] md:h-[76px]">
              <img
                src="../assets/images/egnlogo.png"
                alt="Logo"
                class="w-full h-full object-cover object-center"
              />
            </div>
            <p
              class="font-['Times_New_Roman'] italic text-[24px] md:text-[32px] text-[#f8edd8] tracking-[-1.28px] leading-[1.037]"
            >
              Elsa Garda Nusantara
            </p>
          </div>

          <!-- Mobile Separator -->
          <div class="border-t border-[#e3d7c0] w-full md:hidden"></div>

          <!-- Address -->
          <div class="flex gap-[10px] md:items-start">
            <img
              src="@/assets/vector/vectorpin.svg"
              alt="Alamat"
              class="w-6 h-6 object-contain shrink-0 mt-1"
            />
            <p
              class="font-['Plus_Jakarta_Sans'] text-[16px] text-[#e3d7c0] leading-[1.037] tracking-[-0.64px] text-left"
            >
              Gedung Wiratama, Jln. Harmonika No. 49, Kelurahan Sidodamai, Kecamatan Samarinda Ilir,
              Kota Samarinda, Kalimantan Timur, 75128
            </p>
          </div>

          <!-- Email -->
          <div class="flex gap-[10px] items-center">
            <img
              src="@/assets/vector/vectoremail.svg"
              alt="Email"
              class="w-6 h-6 object-contain shrink-0"
            />
            <a
              href="mailto:indobesia@gmail.com"
              class="font-['Plus_Jakarta_Sans'] text-[16px] text-[#e3d7c0] tracking-[-0.64px] leading-[1.037] hover:underline"
            >
              indobesia@gmail.com
            </a>
          </div>

          <!-- Phone -->
          <div class="flex gap-[10px] items-center">
            <img
              src="@/assets/vector/vectorcall.svg"
              alt="Telepon"
              class="w-6 h-6 object-contain shrink-0"
            />
            <p
              class="font-['Plus_Jakarta_Sans'] text-[16px] text-[#e3d7c0] tracking-[-0.64px] leading-[1.037]"
            >
              +62 823 5097 1811
            </p>
          </div>
        </div>

        <!-- Tentang Kami (Hidden on Mobile) -->
        <div class="hidden md:block">
          <h3
            class="font-['Plus_Jakarta_Sans'] py-5 font-bold text-[25px] text-[#e3d7c0] leading-[1.3] mb-6"
          >
            Tentang Kami
          </h3>
          <p
            class="font-['Plus_Jakarta_Sans'] text-[16px] text-[#e3d7c0] leading-[1.4] text-justify"
          >
            Elsa Garda Nusantara adalah lembaga konsultasi dan bantuan hukum yang berdiri dengan
            transparan.
          </p>
        </div>

        <!-- Sosial Media -->
        <div>
          <h3
            class="font-['Plus_Jakarta_Sans'] py-2 md:py-5 font-bold text-[20px] md:text-[25px] text-[#e3d7c0] md:pl-10 leading-[1.3] mb-4 md:mb-6"
          >
            Sosial Media
          </h3>
          <div class="space-y-4 md:space-y-[37px] md:pl-10">
            <div class="flex gap-[7px] items-center">
              <img
                src="@/assets/vector/vectorfacebook.svg"
                alt="Facebook"
                class="w-6 h-6 object-contain shrink-0"
              />
              <a
                href="#"
                class="font-['Plus_Jakarta_Sans'] text-[16px] text-[#e3d7c0] leading-[1.4] hover:underline"
              >
                Elsa Garda Indonesia
              </a>
            </div>

            <div class="flex gap-[7px] items-center">
              <img
                src="@/assets/vector/vectorinstagram.svg"
                alt="Instagram"
                class="w-6 h-6 object-contain shrink-0"
              />
              <a
                href="#"
                class="font-['Plus_Jakarta_Sans'] text-[16px] text-[#e3d7c0] leading-[1.4] hover:underline"
              >
                elsagardaindonesia
              </a>
            </div>

            <div class="flex gap-[7px] items-center">
              <img
                src="@/assets/vector/vectorlinkedin.svg"
                alt="LinkedIn"
                class="w-6 h-6 object-contain shrink-0"
              />
              <a
                href="#"
                class="font-['Plus_Jakarta_Sans'] text-[16px] text-[#e3d7c0] leading-[1.4] hover:underline"
              >
                LBKH Elsa Garda Indonesia
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-[#e3d7c0] mb-6 mt-8 md:mt-0"></div>

      <div class="text-center md:text-left">
        <p class="font-['Plus_Jakarta_Sans'] text-[14px] md:text-[18px] text-[#f3eee5] leading-[1.4]">
          Copyright © 2025 Elsa Garda Nusantara
        </p>
      </div>
    </div>
  </footer>
</template>
