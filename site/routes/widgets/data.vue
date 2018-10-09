<script>
import CodeBox from '../../components/CodeBox';
import data from '../data/data.json';
export default {
  name: 'DataWidgets',
  data() {
    return {
      messages: data.messages,
      users: data.users,
      orders: data.orders
    };
  },
  components: {
    'x-codebox': CodeBox
  },
  methods: {
    slice(prop, start, end) {
      return this[prop].slice(start, end);
    },
    random(arr) {
      const n = Math.floor(Math.random() * arr.length);
      return arr[n];
    }
  }
};
</script>

<template lang="nunjucks">
  <div>
    <c-row>
      <c-col md="12" lg="8">
        <x-codebox>
          <c-panel title="Top Posts">
            <ul class="list">
              <li class="list__item">
                <article class="cell">
                  <figure class="cell__media">
                    <img class="u-rounded" src="https://placeimg.com/160/120/any?1" width="80" height="60">
                  </figure>
                  <div class="cell__content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, sequi?
                  </div>
                  <div class="cell__after u-w-60 u-text-right">
                    <small>3.4k</small>
                    <c-progress-bar size="sm" type="success" value="90"></c-progress-bar>
                  </div>
                </article>
              </li>
              <li class="list__item">
                <article class="cell">
                  <figure class="cell__media">
                    <img class="u-rounded" src="https://placeimg.com/160/120/any?2" width="80" height="60">
                  </figure>
                  <div class="cell__content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, sequi?
                  </div>
                  <div class="cell__after u-w-60 u-text-right">
                    <small>3k</small>
                    <c-progress-bar size="sm" type="success" value="70"></c-progress-bar>
                  </div>
                </article>
              </li>
              <li class="list__item">
                <article class="cell">
                  <figure class="cell__media">
                    <img class="u-rounded" src="https://placeimg.com/160/120/any?3" width="80" height="60">
                  </figure>
                  <div class="cell__content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, sequi?
                  </div>
                  <div class="cell__after u-w-60 u-text-right">
                    <small>2.8k</small>
                    <c-progress-bar size="sm" type="success" value="50"></c-progress-bar>
                  </div>
                </article>
              </li>
            </ul>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel title="Top Posts">
            <ul class="list">
              <li class="list__item">
                <article class="cell">
                  <figure class="cell__media">
                    <img class="u-rounded" src="..." width="80" height="60">
                  </figure>
                  <div class="cell__content">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, sequi?
                  </div>
                  <div class="cell__after u-w-60 u-text-right">
                    <small>3.4k</small>
                    <c-progress-bar size="sm" type="success" value="90"></c-progress-bar>
                  </div>
                </article>
              </li>
              ...
            </ul>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

      <c-col md="12" lg="8">
        <x-codebox>
          <c-panel>
            <c-tabs type="underline">
              <c-tabs-pane label="News" name="news">
                <ul class="list">
                  <li class="list__item" v-for="message in slice('messages', 0, 5)" :key="message._id">
                    <article class="cell cell--start">
                      <figure class="cell__media">
                        <c-badge :type="random(['info', 'danger', 'success', 'warning', ''])"></c-badge>
                      </figure>
                      <div class="cell__content">
                        <header class="cell__header">
                          <div class="cell__leading">
                            <div class="cell__title" v-text="message.title"></div>
                          </div>
                          <div class="cell__after" v-text="message.date"></div>
                        </header>
                        <div class="cell__body" v-text="message.body"></div>
                      </div>
                    </article>
                  </li>
                </ul>
              </c-tabs-pane>
              <c-tabs-pane label="Messages" name="messages">
                <ul class="list">
                  <li class="list__item" v-for="message in slice('messages', 7, 11)" :key="message._id">
                    <article class="cell cell--start">
                      <figure class="cell__media">
                        <c-badge :type="random(['info', 'danger', 'success', 'warning', ''])"></c-badge>
                      </figure>
                      <div class="cell__content">
                        <header class="cell__header">
                          <div class="cell__leading">
                            <div class="cell__title" v-text="users[message.from].name"></div>
                          </div>
                          <div class="cell__after" v-text="message.date"></div>
                        </header>
                        <div class="cell__body" v-text="message.body"></div>
                      </div>
                    </article>
                  </li>
                </ul>
              </c-tabs-pane>
              <c-tabs-pane label="Feedbacks" name="feedbacks">
                <ul class="list">
                  <li class="list__item" v-for="message in slice('messages', 11, 16)" :key="message._id">
                    <article class="cell cell--start">
                      <figure class="cell__media">
                        <c-badge :type="random(['info', 'danger', 'success', 'warning', ''])"></c-badge>
                      </figure>
                      <div class="cell__content">
                        <header class="cell__header">
                          <div class="cell__leading">
                            <div class="cell__title" v-text="users[message.from].name"></div>
                          </div>
                          <div class="cell__after" v-text="message.date"></div>
                        </header>
                        <div class="cell__body" v-text="message.body"></div>
                      </div>
                    </article>
                  </li>
                </ul>
              </c-tabs-pane>
            </c-tabs>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel>
            <c-tabs type="underline">
              <c-tabs-pane label="News" name="news">
                <ul class="list">
                  <li class="list__item">
                    <article class="cell cell--start">
                      <figure class="cell__media">
                        <c-badge type="info"></c-badge>
                      </figure>
                      <div class="cell__content">
                        <header class="cell__header">
                          <div class="cell__leading">
                            <div class="cell__title">...</div>
                          </div>
                          <div class="cell__after">...</div>
                        </header>
                        <div class="cell__body">...</div>
                      </div>
                    </article>
                  </li>
                  ...
                </ul>
              </c-tabs-pane>
              <c-tabs-pane label="Messages" name="messages">
                ...
              </c-tabs-pane>
              ...
            </c-tabs>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

      <c-col md="12" lg="8">
        <x-codebox>
          <c-panel title="Tasks">
            <ul class="stream">
              <li class="stream__item">
                <c-badge type="primary" class="stream__badge"></c-badge>
                <time class="u-text-muted u-fs-12">2 minutes ago</time>
                <div>Check your internet connection</div>
              </li>
              <li class="stream__item">
                <time class="u-text-muted u-fs-12">9:30</time>
                <div>Meeting with tech leader</div>
              </li>
              <li class="stream__item">
                <time class="u-text-muted u-fs-12">8:30</time>
                <div>
                  Call to customer <a role="button">Jacob</a> and discuss the detail. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, consequatur.
                </div>
              </li>
              <li class="stream__item">
                <time class="u-text-muted u-fs-12">Wed, 25 Mar</time>
                <div>
                  Finished task Testing.
                </div>
              </li>
            </ul>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel title="Tasks">
            <ul class="stream">
              <li class="stream__item">
                <c-badge type="primary" class="stream__badge"></c-badge>
                <time class="u-text-muted u-fs-12">2 minutes ago</time>
                <div>Check your internet connection</div>
              </li>
              ...
            </ul>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

    </c-row>

    <c-row>
      <c-col lg="18">
        <x-codebox>
          <c-panel title="Top Contributors">
            <c-row>
              <c-col md="12" lg="6" v-for="user in slice('users', 0, 20)" :key="user._id">
                <article class="account u-mb-15">
                  <figure class="account__media">
                    <img :src="'static/images/' + user.avatar" class="avatar avatar--lg" />
                  </figure>
                  <div class="account__content">
                    <div class="account_title u-mb-5">{{user.name}}</div>
                    <div class="account__meta">{{user.phone}}</div>
                  </div>
                </article>
              </c-col>
            </c-row>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel title="Top Contributors">
            <c-row>
              <c-col md="12" lg="6">
                <article class="account u-mb-15">
                  <figure class="account__media">
                    <img src="..." class="avatar avatar--lg" />
                  </figure>
                  <div class="account__content">
                    <div class="account_title u-mb-5">...</div>
                    <div class="account__meta">...</div>
                  </div>
                </article>
              </c-col>
              ...
            </c-row>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

      <c-col lg="6">
        <x-codebox>
          <c-panel title="Daily Feed">
            <div class="cell-list">
              <article class="cell" v-for="message in slice('messages', 9, 13)" :key="message._id">
                <div class="cell__content">
                  <header class="cell__header">
                    <div class="cell__leading">
                      <div class="account">
                        <figure class="account__media">
                          <img :src="'static/images/' + users[message.from].avatar" class="avatar avatar--sm" />
                        </figure>
                        <div class="account__content">
                          <div class="account__title">{{users[message.from].name}}</div>
                          <div class="account__meta">@{{users[message.from].name.replace(" ", "").toLowerCase()}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="cell__after">
                      <c-button type="info" outline size="sm">Follow</c-button>
                    </div>
                  </header>
                  <div class="cell__body">{{message.body}}</div>
                </div>
              </article>
            </div>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel title="Daily Feed">
            <div class="cell-list">
              <article class="cell">
                <div class="cell__content">
                  <header class="cell__header">
                    <div class="cell__leading">
                      <div class="account">
                        <figure class="account__media">
                          <img src="..." class="avatar avatar--sm" />
                        </figure>
                        <div class="account__content">
                          <div class="account__title">...</div>
                          <div class="account__meta">...</div>
                        </div>
                      </div>
                    </div>
                    <div class="cell__after">
                      <c-button type="info" outline size="sm">Follow</c-button>
                    </div>
                  </header>
                  <div class="cell__body">...</div>
                </div>
              </article>
              ...
            </div>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>
    </c-row>
  </div>
</template>
