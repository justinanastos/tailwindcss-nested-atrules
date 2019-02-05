* Install dependencies

    ```
    npm install
    ```

* Run

    ```
    npm start
    ```

The result will show the following:

```css
.leading-none {
  line-height: 1;
}

@supports (padding: max(0px)) {
  .safe\:leading-none {
    line-height: 1;
  }
}

@media (min-width: 576px) {
  .sm\:leading-none {
    line-height: 1;
  }

  @supports (padding: max(0px)) {
    .safe\:leading-none {
      line-height: 1;
    }
  }
}
```

Notice that the final `@supports` block does _not_ include the `sm:` prefix.
