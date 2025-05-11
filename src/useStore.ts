const store = {
  lang: 'en',
}

export default function useStore() {
  const setLang = (lang: string) => {
    store.lang = lang
  }

  const getLang = () => {
    return store.lang
  }

  return {
    setLang,
    getLang,
  }
}
