<script>
import CodeBox from '../../components/CodeBox';
export default {
  name: 'InfoWidgets',
  components: {
    'x-codebox': CodeBox
  }
};
</script>

<template lang="nunjucks">
  <div>
    <x-codebox>
      <c-panel>
        <c-row align="middle">
          <c-col md="6" lg="4" class="u-text-center">
            <img :src="'static/images/avatar.jpg'" class="avatar avatar--lg" alt="avatar" />
            <div class="u-fs-16 u-mt-5">
              <span class="u-text-muted">Hi, </span>
              MOYU
            </div>
          </c-col>
          <c-col md="9" lg="10">
            <div>Inbox</div>
            <div class="u-mb-5">
              <span class="u-fs-24 u-color-info">12</span>
              <span class="u-text-muted">new messages</span>
            </div>
            <c-nav type="gap">
              <c-nav-item title="All(36)"></c-nav-item>
              <c-nav-item title="Unread(12)"></c-nav-item>
              <c-nav-item title="Latter(13)"></c-nav-item>
              <c-nav-item title="Marked(11)"></c-nav-item>
            </c-nav>
          </c-col>
          <c-col md="9" lg="10">
            <div>Task</div>
            <div class="u-mb-5">
              <span class="u-fs-24 u-color-warning">8</span>
              <span class="u-text-muted">today</span>
            </div>
            <c-nav type="gap">
              <c-nav-item title="All(32)"></c-nav-item>
              <c-nav-item title="Today(8)"></c-nav-item>
              <c-nav-item title="Done(64)"></c-nav-item>
            </c-nav>
          </c-col>
        </c-row>
      </c-panel>
      <template slot="code">
      <% markdown %>
      ```html
      <c-panel>
        <c-row align="middle">
          <c-col md="6" lg="4" class="u-text-center">
            <img src="...." class="avatar avatar--lg" alt="avatar" />
            <div class="u-fs-16 u-mt-5">
              <span class="u-text-muted">Hi, </span>
              MOYU
            </div>
          </c-col>
          <c-col md="9" lg="10">
            <div>Inbox</div>
            <div class="u-mb-5">
              <span class="u-fs-24 u-color-info">12</span>
              <span class="u-text-muted">new messages</span>
            </div>
            <c-nav type="gap">
              <c-nav-item title="All(36)"></c-nav-item>
              ...
            </c-nav>
          </c-col>
          <c-col md="9" lg="10">
            <div>Task</div>
            <div class="u-mb-5">
              <span class="u-fs-24 u-color-warning">8</span>
              <span class="u-text-muted">today</span>
            </div>
            <c-nav type="gap">
              <c-nav-item title="All(32)"></c-nav-item>
              ...
            </c-nav>
          </c-col>
        </c-row>
      </c-panel>
      ```
      <% endmarkdown %>
      </template>
    </x-codebox>

    <c-row>
      <c-col md="8">
        <x-codebox>
          <c-panel>
            <div class="message u-p-20">
              <div class="message__media">
                <i class="icon-users icon-3x u-color-teal"></i>
              </div>
              <div class="message__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, repudiandae.
              </div>
              <c-button type="success" size="lg" smart>Call Us</c-button>
            </div>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel>
            <div class="message u-p-20">
              <div class="message__media">
                <i class="icon-users icon-3x u-color-teal"></i>
              </div>
              <div class="message__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, repudiandae.
              </div>
              <c-button type="success" size="lg" smart>Call Us</c-button>
            </div>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>
      <c-col md="8">
        <x-codebox>
          <c-panel>
            <div class="message u-p-20">
              <div class="message__media">
                <i class="icon-paperplane icon-3x u-color-lime"></i>
              </div>
              <div class="message__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, repudiandae.
              </div>
              <c-button type="success" size="lg" smart>Send Email</c-button>
            </div>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel>
            <div class="message u-p-20">
              <div class="message__media">
                <i class="icon-paperplane icon-3x u-color-lime"></i>
              </div>
              <div class="message__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, repudiandae.
              </div>
              <c-button type="success" size="lg" smart>Send Email</c-button>
            </div>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>
      <c-col md="8">
        <x-codebox>
          <c-panel>
            <div class="message u-p-20">
              <div class="message__media">
                <i class="icon-bubbles icon-3x u-color-blue"></i>
              </div>
              <div class="message__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, repudiandae.
              </div>
              <c-button type="success" size="lg" smart>Snapchat</c-button>
            </div>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel>
            <div class="message u-p-20">
              <div class="message__media">
                <i class="icon-bubbles icon-3x u-color-blue"></i>
              </div>
              <div class="message__content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, repudiandae.
              </div>
              <c-button type="success" size="lg" smart>Snapchat</c-button>
            </div>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>
    </c-row>

    <c-row>
      <c-col md="12" lg="6" xl="4">
        <x-codebox>
          <c-panel>
            <div class="u-text-center">
              <div class="u-fs-18 u-mb-10">Pro Plan</div>
              <em class="u-color-success u-fs-48">$20.00</em>
              <div class="u-color-muted u-fs-16 u-mb-20">Annual</div>
              <p class="u-mb-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit cumque molestias quibusdam fugit dolore, maxime nesciunt at ex quisquam beatae corrupti veniam quod fugiat hic, neque distinctio minus? Blanditiis, distinctio.
              </p>
              <c-button type="info" smart>Start Now</c-button>
            </div>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel>
            <div class="u-text-center">
              <div class="u-fs-18 u-mb-10">Pro Plan</div>
              <em class="u-color-success u-fs-48">$20.00</em>
              <div class="u-color-muted u-fs-16 u-mb-20">Annual</div>
              <p class="u-mb-20">
                Lorem ipsum dolor...
              </p>
              <c-button type="info" smart>Start Now</c-button>
            </div>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

      <c-col sm="12" md="8" lg="6" xl="4">
        <x-codebox>
          <c-panel>
            <article class="cell cell--lg">
              <figure class="cell__media">
                <img :src="'static/images/avatar-m-5.jpg'" class="avatar avatar--lg" />
              </figure>
              <div class="cell__content">
                <h4 class="u-m-0">John Doe</h4>
                <div class="u-text-muted u-mb-10">Project Manager</div>
                <c-nav type="gap">
                  <c-nav-item>
                    <i class="icon-twitter u-color-light-blue"></i>
                  </c-nav-item>
                  <c-nav-item>
                    <i class="icon-facebook u-color-indigo"></i>
                  </c-nav-item>
                  <c-nav-item>
                    <i class="icon-instagram u-color-brown"></i>
                  </c-nav-item>
                  <c-nav-item>
                    <i class="icon-linkedin u-color-blue"></i>
                  </c-nav-item>
                </c-nav>
              </div>
              <div class="cell__after">
                <i class="icon-pencil u-text-muted"></i>
              </div>
            </article>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel>
            <article class="cell cell--lg">
              <figure class="cell__media">
                <img src="..." class="avatar avatar--lg" />
              </figure>
              <div class="cell__content">
                <h4 class="u-m-0">John Doe</h4>
                <div class="u-text-muted u-mb-10">Project Manager</div>
                <c-nav type="gap">
                  <c-nav-item>
                    <i class="icon-twitter u-color-light-blue"></i>
                  </c-nav-item>
                  ...
                </c-nav>
              </div>
              <div class="cell__after">
                <i class="icon-pencil u-text-muted"></i>
              </div>
            </article>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

      <c-col md="10" lg="8" xl="6">
        <x-codebox>
          <c-panel>
            <div class="u-text-center">
              <img :src="'static/images/avatar-m-2.jpg'" class="avatar avatar--xl u-mb-10">
              <div class="u-fs-16">Emerson Medina</div>
              <div>Freelancer, Designer, Coder</div>
              <div class="u-text-muted u-mb-15">184 Malta Street, Neibert, West Virginia, 7480</div>
            </div>
            <c-row>
              <c-col xs="12">
                <c-button type="info" block>Edit Profile</c-button>
              </c-col>
              <c-col xs="12">
                <c-button type="ghost" block>View Profile</c-button>
              </c-col>
            </c-row>
            <hr class="u-mb-10" />
            <c-level>
              <c-level-item>
                <div class="u-fs-16">38</div>
                <span class="u-text-muted">REVIEWS</span>
              </c-level-item>
              <c-level-item>
                <div class="u-fs-16">54</div>
                <span class="u-text-muted">CLIENTS</span>
              </c-level-item>
              <c-level-item>
                <div class="u-fs-16">12</div>
                <span class="u-text-muted">PROJECTS</span>
              </c-level-item>
            </c-level>
            <hr class="u-mt-10 u-mb-15" />
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam fuga eaque totam omnis vero magnam ipsa sit a officiis. Vitae voluptate ut magni ipsum non explicabo quidem ipsam earum voluptatum!
            </div>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel>
            <div class="u-text-center">
              <img src="..." class="avatar avatar--xl u-mb-10">
              <div class="u-fs-16">Emerson Medina</div>
              <div>Freelancer, Designer, Coder</div>
              <div class="u-text-muted u-mb-15">184 Malta Street, Neibert, West Virginia, 7480</div>
            </div>
            <c-row>
              <c-col xs="12">
                <c-button type="info" block>Edit Profile</c-button>
              </c-col>
              <c-col xs="12">
                <c-button type="ghost" block>View Profile</c-button>
              </c-col>
            </c-row>
            <hr class="u-mb-10" />
            <c-level>
              <c-level-item>
                <div class="u-fs-16">38</div>
                <span class="u-text-muted">REVIEWS</span>
              </c-level-item>
              <c-level-item>
                <div class="u-fs-16">54</div>
                <span class="u-text-muted">CLIENTS</span>
              </c-level-item>
              <c-level-item>
                <div class="u-fs-16">12</div>
                <span class="u-text-muted">PROJECTS</span>
              </c-level-item>
            </c-level>
            <hr class="u-mt-10 u-mb-15" />
            <div>
                Lorem ipsum dolor sit...
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
