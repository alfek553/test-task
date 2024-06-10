# Test-Task

## Ссылка на сайт
[https://test-task-eight-chi.vercel.app/](URL)

## Описание
Сайт состоит из 3 частей: header, body, and footer
– **header** представляет собой полосу вверху страницы с заполнителем для названия или логотипа веб-сайта, а также с некоторым ссылками, напрмер на страницу с контактной формой.
– **body** содержимое страницы
– **footer** представляет собой "подвал" страницы, и содержит в себе ссылки на страницы правил игры и политики конфиденциальности.

## Страницы
### Game
Страница сайта представляет собой игровое поле (прим. 1), в котором реализован механизм появления новых прямоугольников (прим. 2) на игровом поле, когда пользователь нажимает на любое пустое место пигрового поля. Также пользователь может перемещать карточки по игровому полю.
Карточка появляется из верхнего левого угла до места клика за одинаковое время для любой точки поля.
На месте клика появляется середина карточки. Также карточку нельзя создать так чтобы она выходила за рамки поля, для этого её координаты корректируются при создании.
Для реализации реагирования карточки на изменение размеров игрового поля был создан хук useGameFieldResize. Координаты каточки будут изменяться в зависимости от соотношения предыдущих размером игрового поля и новых размеров.
### Contact Us 
Страница сайта с контактной формой. Содержет в себе поля для ввода имени, email и комментария. После отправки формы она обрабатывается server action и пользователь получает ответ.
### Rules
 Условная страница с предполагаемыми правилами игры и ссылкой на страницу с игрой.
### Privacy Policy
Условная страница с предполагаемыми политикой конфиденциальности


## Примечания
1. Не совсем понятна формулировка "The game field should occupy the remaining space between the header and footer". Я реализовал что при открытии страницы экран занимает только header и body, а до footer, нужно скролить.
2. Форму карточки я выбрал квадрат, но для того чтобы поменять соотношение сторон достаточно задать коэффициент для aspect-ratio в свойствах карточки.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Task Description:
1. Layout Structure:
- Implement a responsive layout with a header, body, and footer.
- Use SCSS for styling the components.
- Ensure the website has multiple pages. The main page should describe the website, and other pages should share the same header and footer but contain different content.
2. Header:
- The header should be a simple bar at the top of the page with a placeholder for the website title or logo.
3. Footer:
- The footer should be a bar at the bottom of the page with a placeholder for any footer content (e.g., copyright notice).
4. Game Field (Body):
- In the body section of the game page, create a game field where rectangles can be spawned and moved around.
- The game field should occupy the remaining space between the header and footer and be responsive to window resizing.
5. Rectangle Spawning:
- Implement a mechanism to spawn new rectangles within the game field when the user clicks on any empty spot.
- Each rectangle should contain an image (you can use any placeholder image).
- Spawning of a new rectangle should include an animation from the top left corner to the click/tap coordinates.
6. Rectangle Interaction:
- Allow users to drag and move the rectangles around within the game field.
- Ensure the dragging interaction is smooth and responsive.
- The last interacted rectangle should always be on the top layer.
7. Responsiveness:
- Ensure the entire application is responsive.
- When the browser window is resized, the game field should recalculate its size, and the rectangles should adjust their positions accordingly if necessary.
8. Additional Pages:
- Implement a contact form on one of the pages. This form should include fields for the user's name, email, subject, and message, along with a submit button.
- Ensure all pages share the same header and footer for consistency.

