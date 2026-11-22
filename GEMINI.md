# Wiedza i wymagania aplikacji Serwis-RTVAGD

Poniższe elementy są kluczowe i **muszą pozostać w aplikacji** — nie wolno ich usuwać ani zastępować podczas przyszłych refaktoryzacji lub audytów:

1. **Schemat `Product` w danych strukturalnych JSON-LD na podstronach usług**
   - Dotyczy podstron: `/naprawa-pralek/`, `/naprawa-suszarek/`, `/naprawa-zmywarek/`, `/naprawa-ekspresow/`, `/naprawa-telewizorow/` (zdefiniowany w `utils/dataForMetaTags.js` i renderowany w `components/common/MetaTags/index.js`).
   - Schemat `@type: "Product"` (wraz z `aggregateRating`) **musi pozostać** w JSON-LD na stronach usług.

2. **Efekt rozmycia (`filter: blur(...)`) w animowanym tle**
   - Dotyczy `components/Background/styled.js`.
   - Efekt `blur` na warstwach tła jest celowym, ważnym elementem wizualnym aplikacji i **musi pozostać** bez zmian.
