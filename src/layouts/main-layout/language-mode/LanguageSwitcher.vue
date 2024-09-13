<template>
  <!--begin::Menu-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-primary fw-semibold py-4 fs-base w-175px"
    data-kt-menu="true"
    data-kt-element="language-mode-menu"
  >
    <!--begin::Menu item-->
    <div class="menu-item px-3">
      <a
        @click="setLang('en')"
        href="#"
        class="menu-link d-flex px-5"
        :class="{ active: currentLanguage === 'en' }"
      >
        <span class="symbol symbol-20px me-4">
          <img
            class="rounded-1"
            :src="getAssetPath('media/flags/united-states.svg')"
            alt="metronic"
          />
        </span>
        English
      </a>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a
            @click="setLang('es')"
            href="#"
            class="menu-link d-flex px-5"
            :class="{ active: currentLanguage === 'es' }"
          >
            <span class="symbol symbol-20px me-4">
              <img
                class="rounded-1"
                :src="getAssetPath('media/flags/spain.svg')"
                alt="metronic"
              />
            </span>
            Spanish
          </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a
            @click="setLang('de')"
            href="#"
            class="menu-link d-flex px-5"
            :class="{ active: currentLanguage === 'de' }"
          >
            <span class="symbol symbol-20px me-4">
              <img
                class="rounded-1"
                :src="getAssetPath('media/flags/germany.svg')"
                alt="metronic"
              />
            </span>
            German
          </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a
            @click="setLang('ja')"
            href="#"
            class="menu-link d-flex px-5"
            :class="{ active: currentLanguage === 'ja' }"
          >
            <span class="symbol symbol-20px me-4">
              <img
                class="rounded-1"
                :src="getAssetPath('media/flags/japan.svg')"
                alt="metronic"
              />
            </span>
            Japanese
          </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a
            @click="setLang('fr')"
            href="#"
            class="menu-link d-flex px-5"
            :class="{ active: currentLanguage === 'fr' }"
          >
            <span class="symbol symbol-20px me-4">
              <img
                class="rounded-1"
                :src="getAssetPath('media/flags/france.svg')"
                alt="metronic"
              />
            </span>
            French
          </a>
        </div>
        <!--end::Menu item-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent } from "vue";
import { useThemeStore } from "@/stores/theme";
import { useConfigStore } from "@/stores/config";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";


export default defineComponent({
  name: "kt-language-switcher",
  component: {},
  setup() {
    const storeTheme = useThemeStore();
    const storeConfig = useConfigStore();
    const route = useRoute();
    const i18n = useI18n();
    const countries = {
      en: {
        flag: getAssetPath("media/flags/united-states.svg"),
        name: "English",
      },
      es: {
        flag: getAssetPath("media/flags/spain.svg"),
        name: "Spanish",
      },
      de: {
        flag: getAssetPath("media/flags/germany.svg"),
        name: "German",
      },
      ja: {
        flag: getAssetPath("media/flags/japan.svg"),
        name: "Japanese",
      },
      fr: {
        flag: getAssetPath("media/flags/france.svg"),
        name: "French",
      },
    };

    const setLang = (lang: string) => {
      localStorage.setItem("lang", lang);
      i18n.locale.value = lang;
    };

    const currentLanguage = computed(() => {
      return i18n.locale.value;
    });

    const currentLangugeLocale = computed(() => {
      return countries[i18n.locale.value as keyof typeof countries];
    });
    

    const path = computed(() => route.path);

    const setMode = (mode: "dark" | "light" | "system") => {
      let configMode = mode;

      storeConfig.setLayoutConfigProperty("general.mode", configMode);

      storeTheme.setThemeMode(configMode);
    };

    return {
      setMode,
      path,
      getAssetPath,
      setLang,
      currentLanguage,
      currentLangugeLocale,
      countries
    };
  },
});
</script>
