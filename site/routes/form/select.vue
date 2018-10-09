<script>
import Multiselect from 'cover/vendors/multiselect';

export default {
  name: 'SelectView',
  components: {
    'c-multiselect': Multiselect
  },
  data() {
    return {
      singleSelected: '',
      searchSelected: '',
      multiSelected: [{ value: 'blue', label: 'Blue' }],
      asyncSelected: [],
      tagSelected: [],
      isLoading: false,
      users: [],
      colors: [
        { value: 'red', label: 'Red' },
        { value: 'blue', label: 'Blue' },
        { value: 'Black', label: 'Black' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'pink', label: 'Pink' },
        { value: 'purple', label: 'Purple' },
        { value: 'indigo', label: 'Indigo' },
        { value: 'cyan', label: 'Cyan' },
        { value: 'teal', label: 'Teal' },
        { value: 'green', label: 'Green' },
        { value: 'lime', label: 'Lime' },
        { value: 'amber', label: 'Amber' },
        { value: 'orange', label: 'Orange' },
        { value: 'brown', label: 'Brown' },
        { value: 'grey', label: 'Grey' }
      ]
    };
  },
  methods: {
    addTag(str) {
      const tag = {
        value: str,
        label: str.replace(/\b\w/g, l => l.toUpperCase())
      };
      this.colors.push(tag);
      this.tagSelected.push(tag);
    },
    asyncSearch(query) {
      if (!query) return;
      this.isLoading = true;
      fetch(`https://api.github.com/search/users?q=${query}`)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .then(data => {
          this.users = data.items;
          this.isLoading = false;
        });
    }
  }
};
</script>

<template lang="nunjucks">
  <c-main>
    <c-panel title="Picker">

      <p><code>c-multiselect</code> component is just a wrapper of <a href="https://vue-multiselect.js.org" target="_blank">Vue-Multiselect</a>. We only rewrite its styles, API remain the same.</p>

      <c-note type="warning">
        <strong>Vendor Component</strong>: a vendor component needs a third-party plugin, which would increase the size of your bundle file, so we separte it from the core of <strong>Cover</strong>. If you want to use vendor component, you must import it manually.
      </c-note>

      </c-panel>

      <c-panel title="Single pick">
        <c-row gutter="20">
          <c-col md="7">
            <c-multiselect
              v-model="singleSelected"
              track-by="value"
              label="label"
              :options="colors"
              :searchable="false"
              :close-on-select="false"
              placeholder="Pick a color"></c-multiselect>
            <hr />
            <pre v-text="singleSelected"></pre>
          </c-col>
          <c-col>

            <p>When working with objects, you must provide additional props: <code>label</code> and `track-by`.</p>
            <p><code>track-by</code> is used to identify the option within the options list thus it’s value has to be unique. In this example the <code>value</code> property is unique across all options, so it can be used as <code>track-by</code> value. <code>label</code> is used to display the option.</p>
            <% markdown %>
            ```html
            <template>
              <c-multiselect
                v-model="singleSelected"
                track-by="value"
                label="label"
                :options="colors"
                :searchable="false"
                :close-on-select="false"
                placeholder="Pick a color"></c-multiselect>
            </template>

            <script>
              import Multiselect from 'cover/vendors/multiselect'
              export default {
                components: {
                  'c-multiselect': Multiselect
                },
                data() {
                  return {
                    singleSelected: '',
                    colors: [
                      { value: 'red', label: 'Red' },
                      { value: 'blue', label: 'Blue' },
                      // ...
                    ]
                  }
                }
              }
            </script>
            ```
            <% endmarkdown %>
        </c-col>
        </c-row>
      </c-panel>

      <c-panel title="Pick with search">
        <c-row gutter="20">
          <c-col md="7">
            <c-multiselect
              v-model="searchSelected"
              track-by="value"
              label="label"
              :options="colors"
              placeholder="What are you looking for?"></c-multiselect>
            <hr />
            <pre v-text="searchSelected"></pre>
          </c-col>
          <c-col>
            <p>By default <code>searchable</code> is set to true, thus using search doesn’t require any prop.</p>
            <% markdown %>
            ```html
            <template>
              <c-multiselect
                v-model="searchSelected"
                track-by="value"
                label="label"
                :options="colors"
                placeholder="What are you looking for?"></c-multiselect>
            </template>

            <script>
              import Multiselect from 'cover/vendors/multiselect'
              export default {
                components: {
                  'c-multiselect': Multiselect
                },
                data() {
                  return {
                    searchSelected: '',
                    colors: [
                      { value: 'red', label: 'Red' },
                      { value: 'blue', label: 'Blue' },
                      // ...
                    ]
                  }
                }
              }
            </script>
            ```
            <% endmarkdown %>
        </c-col>
        </c-row>
      </c-panel>

      <c-panel title="Multiple pick">
        <c-row gutter="20">
          <c-col md="7">
            <c-multiselect
              v-model="multiSelected"
              track-by="value"
              label="label"
              :options="colors"
              :multiple="true"></c-multiselect>
            <hr />
            <pre v-text="multiSelected"></pre>
          </c-col>
          <c-col>
            <p>To allow multiple selections pass the <code>:multiple="true"</code> prop.</p>
            <% markdown %>
            ```html
            <template>
              <c-multiselect
                v-model="multiSelected"
                track-by="value"
                label="label"
                :options="colors"
                :multiple="true"></c-multiselect>
            </template>

            <script>
              import Multiselect from 'cover/vendors/multiselect'
              export default {
                components: {
                  'c-multiselect': Multiselect
                },
                data() {
                  return {
                    multiSelected: [],
                    colors: [
                      { value: 'red', label: 'Red' },
                      { value: 'blue', label: 'Blue' },
                      // ...
                    ]
                  }
                }
              }
            </script>
            ```
            <% endmarkdown %>
        </c-col>
        </c-row>
      </c-panel>

      <c-panel title="Asynchronous pick with custom template">
        <c-row gutter="20">
          <c-col md="7">
            <c-multiselect
              v-model="asyncSelected"
              :loading="isLoading"
              track-by="id"
              label="login"
              :options="users"
              :searchable="true"
              :internal-search="false"
              :close-on-select="false"
              :clear-on-select="true"
              :limit="3"
              @search-change="asyncSearch"
              placeholder="Type to search GitHub users"
              :multiple="true">
                <span slot="noResult">Oops! No users found.</span>
                <template slot="option" slot-scope="props">
                  <article class="cell">
                    <figure class="cell__media">
                      <img :src="props.option.avatar_url" class="avatar avatar--sm">
                    </figure>
                    <div class="cell__content" v-text="props.option.login"></div>
                    <div class="cell__after">{{Math.floor(props.option.score)}} Score</div>
                  </article>
                </template>
              </c-multiselect>
            <hr />
            <pre v-text="asyncSelected"></pre>
          </c-col>
          <c-col>

            <p>Vue-Multiselect supports changing the option list on the fly, thus can be also used a type-a-head search box.</p>
            <p>To react to the search query changes, set a handler function on the <code>@search-change</code> event. It receives the <code>searchQuery</code> as the first param, which can be used to make an asynchronous API call.</p>
            <p>It is convenient to set the <code>:loading</code> prop to true, whenever a request is in progress. Look at the provided asyncFind method for an example usage.</p>
            <% markdown %>
            ```html
            <template>
              <c-multiselect
                v-model="asyncSelected"
                :loading="isLoading"
                track-by="id"
                label="login"
                :options="users"
                :searchable="true"
                :internal-search="false"
                :close-on-select="false"
                :clear-on-select="true"
                :limit="3"
                @search-change="asyncSearch"
                placeholder="Type to search GitHub users"
                :multiple="true">
                  <span slot="noResult">Oops! No users found.</span>
                  <template slot="option" slot-scope="props">
                    <article class="cell">
                      <figure class="cell__media">
                        <img :src="props.option.avatar_url" class="avatar avatar--sm">
                      </figure>
                      <div class="cell__content" v-text="props.option.login"></div>
                      <div class="cell__after">{{Math.floor(props.option.score)}} Score</div>
                    </article>
                  </template>
              </c-multiselect>
            </template>

            <script>
              import Multiselect from 'cover/vendors/multiselect'
              export default {
                components: {
                  'c-multiselect': Multiselect
                },
                data() {
                  return {
                    asyncSelected: [],
                    isLoading: false,
                    users: []
                  }
                },
                methods: {
                  asyncSearch(query) {
                    if (!query) return
                    this.isLoading = true
                    fetch(`https://api.github.com/search/users?q=${query}`)
                      .then(res => {
                        if (res.ok) {
                          return res.json()
                        } else {
                          return Promise.reject()
                        }
                      })
                      .then(data => {
                        this.users = data.items
                        this.isLoading = false
                      })
                      .catch(err => {
                        this.isLoading = false
                      })
                  }
                }
              }
            </script>
            ```
            <% endmarkdown %>
          </c-col>
        </c-row>
      </c-panel>

      <c-panel title="Tagging">
        <c-row gutter="20">
          <c-col md="7">
            <c-multiselect
              v-model="tagSelected"
              track-by="value"
              label="label"
              @tag="addTag"
              :options="colors"
              :taggable="true"
              placeholder="Search or add a tag"
              :multiple="true"></c-multiselect>
            <hr />
            <pre v-text="tagSelected"></pre>
          </c-col>
          <c-col>

            <p>To add tagging functionality to single/multiple selects, set the <code>:taggable</code> prop to <code>true</code>. This will add an additional option at the beginning of the options list whenever you type a phrase that doesn’t have an exact match in the available options. Selecting this temporary option will emit the <code>@tag</code> event with the current typed search query as the first param. The event handler should add the received <strong>tag</strong> to both the options list and the value.</p>
            <p>Remember that when working with objects as options, you have to transform the received tag string to an object that matches the objects structure of the options list. In this example, the <code>addTag</code> method generates an object with a unique code property.</p>
            <% markdown %>
            ```html
            <template>
              <c-multiselect
                v-model="tagSelected"
                track-by="value"
                label="label"
                @tag="addTag"
                :options="colors"
                :taggable="true"
                placeholder="Search or add a tag"
                :multiple="true"></c-multiselect>
            </template>

            <script>
              import Multiselect from 'cover/vendors/multiselect'
              export default {
                components: {
                  'c-multiselect': Multiselect
                },
                data() {
                  return {
                    tagSelected: [],
                    colors: [
                      { value: 'red', label: 'Red' },
                      { value: 'blue', label: 'Blue' },
                      { value: 'Black', label: 'Black' },
                      { value: 'yellow', label: 'Yellow' },
                      { value: 'pink', label: 'Pink' },
                      { value: 'purple', label: 'Purple' },
                      { value: 'indigo', label: 'Indigo' },
                      { value: 'cyan', label: 'Cyan' },
                      { value: 'teal', label: 'Teal' },
                      { value: 'green', label: 'Green' },
                      { value: 'lime', label: 'Lime' },
                      { value: 'amber', label: 'Amber' },
                      { value: 'orange', label: 'Orange' },
                      { value: 'brown', label: 'Brown' },
                      { value: 'grey', label: 'Grey' },
                    ]
                  }
                },
                methods: {
                  addTag(str) {
                    const tag = {
                      value: str,
                      label: str.replace(/\b\w/g, l => l.toUpperCase())
                    }
                    this.colors.push(tag)
                    this.tagSelected.push(tag)
                  }
                }
              }
            </script>
            ```
            <% endmarkdown %>
          </c-col>
        </c-row>
      </c-panel>
  </c-main>
</template>
