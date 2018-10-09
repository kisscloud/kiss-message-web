<script>
import CodeBox from '../../components/CodeBox';
export default {
  name: 'StatisticWidgets',
  components: {
    'x-codebox': CodeBox
  }
};
</script>

<template lang="nunjucks">
  <div>
    <c-row>
      <c-col sm="12" lg="6">
        <x-codebox>
          <c-panel>
            <c-level>
              <template slot="left">
                <i class="icon-stats-growth2 icon-2x u-color-success"></i>
              </template>
              <template slot="right">
                <div class="u-text-right">
                  <div class="u-text-muted">Monthly Sales</div>
                  <div class="u-h1">371</div>
                </div>
              </template>
            </c-level>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel>
            <c-level>
              <template slot="left">
                <i class="icon-stats-growth2 icon-2x u-color-success"></i>
              </template>
              <template slot="right">
                <div class="u-text-right">
                  <div class="u-text-muted">Monthly Sales</div>
                  <div class="u-h1">371</div>
                </div>
              </template>
            </c-level>
          </c-panel>
          ```
          <% endmarkdown %>
        </template>
        </x-codebox>
      </c-col>

      <c-col sm="12" lg="6">
        <x-codebox>
          <c-panel>
            <c-level>
              <template slot="left">
                <i class="icon-users icon-2x u-color-info"></i>
              </template>
              <template slot="right">
                <div class="u-text-right">
                  <div class="u-text-muted">New Users</div>
                  <div class="u-h1">113</div>
                </div>
              </template>
            </c-level>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel>
            <c-level>
              <template slot="left">
                <i class="icon-users icon-2x u-color-info"></i>
              </template>
              <template slot="right">
                <div class="u-text-right">
                  <div class="u-text-muted">New Users</div>
                  <div class="u-h1">113</div>
                </div>
              </template>
            </c-level>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

      <c-col sm="12" lg="6">
        <x-codebox>
          <c-panel>
            <c-level>
              <c-level-item>
                <div class="u-text-center">
                  <div class="u-text-muted">Followers</div>
                  <div class="u-h1">8346</div>
                </div>
              </c-level-item>
            </c-level>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel>
            <c-level>
              <c-level-item>
                <div class="u-text-center">
                  <div class="u-text-muted">Followers</div>
                  <div class="u-h1">8346</div>
                </div>
              </c-level-item>
            </c-level>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

      <c-col sm="12" lg="6">
        <x-codebox>
          <c-panel>
            <c-level>
              <template slot="left">
                <i class="icon-download4 icon-2x u-color-primary"></i>
              </template>
              <template slot="right">
                <div class="u-text-right">
                  <div class="u-text-muted">Downloads</div>
                  <div class="u-h1">1231</div>
                </div>
              </template>
            </c-level>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel>
            <c-level>
              <template slot="left">
                <i class="icon-download4 icon-2x u-color-primary"></i>
              </template>
              <template slot="right">
                <div class="u-text-right">
                  <div class="u-text-muted">Downloads</div>
                  <div class="u-h1">1231</div>
                </div>
              </template>
            </c-level>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

    </c-row>

    <c-row>
      <c-col lg="12">
        <x-codebox>
          <c-panel title="Overview">
            <c-row>
              <c-col xs="12" md="8" lg="6">
                <div class="cell cell--start u-mt-10 u-mb-10">
                  <div class="cell__media">
                    <i class="icon-2x icon-newspaper u-color-orange"></i>
                  </div>
                  <div class="cell__content">
                    <h6 class="u-mb-0">22 Aug 1993</h6>
                    <div class="u-text-muted u-fs-12">It's Friday</div>
                  </div>
                </div>
              </c-col>
              <c-col xs="12" md="8" lg="6">
                <div class="cell cell--start u-mt-10 u-mb-10">
                  <div class="cell__media">
                    <i class="icon-2x icon-heart u-color-red"></i>
                  </div>
                  <div class="cell__content">
                    <h6 class="u-mb-0">In a relationship</h6>
                    <div class="u-text-muted u-fs-12">30 Days</div>
                  </div>
                </div>
              </c-col>
              <c-col xs="12" md="8" lg="6">
                <div class="cell cell--start u-mt-10 u-mb-10">
                  <div class="cell__media">
                    <i class="icon-2x icon-star-full u-color-amber"></i>
                  </div>
                  <div class="cell__content">
                    <h6 class="u-mb-0">Reward</h6>
                    <div class="u-text-muted u-fs-12">Help people</div>
                  </div>
                </div>
              </c-col>
              <c-col xs="12" md="8" lg="6">
                <div class="cell cell--start u-mt-10 u-mb-10">
                  <div class="cell__media">
                    <i class="icon-2x icon-office u-color-indigo"></i>
                  </div>
                  <div class="cell__content">
                    <h6 class="u-mb-0">Department</h6>
                    <div class="u-text-muted u-fs-12">Where I sleep</div>
                  </div>
                </div>
              </c-col>
              <c-col xs="12" md="8" lg="6">
                <div class="cell cell--start u-mt-10 u-mb-10">
                  <div class="cell__media">
                    <i class="icon-2x icon-hat u-color-blue"></i>
                  </div>
                  <div class="cell__content">
                    <h6 class="u-mb-0">Graduation</h6>
                    <div class="u-text-muted u-fs-12">From Harvard</div>
                  </div>
                </div>
              </c-col>
              <c-col xs="12" md="8" lg="6">
                <div class="cell cell--start u-mt-10 u-mb-10">
                  <div class="cell__media">
                    <i class="icon-2x icon-briefcase u-color-brown"></i>
                  </div>
                  <div class="cell__content">
                    <h6 class="u-mb-0">Work</h6>
                    <div class="u-text-muted u-fs-12">9am to 5pm</div>
                  </div>
                </div>
              </c-col>
              <c-col xs="12" md="8" lg="6">
                <div class="cell cell--start u-mt-10 u-mb-10">
                  <div class="cell__media">
                    <i class="icon-2x icon-airplane u-color-lightBlue"></i>
                  </div>
                  <div class="cell__content">
                    <h6 class="u-mb-0">Travel</h6>
                    <div class="u-text-muted u-fs-12">Have a vacation</div>
                  </div>
                </div>
              </c-col>
              <c-col xs="12" md="8" lg="6">
                <div class="cell cell--start u-mt-10 u-mb-10">
                  <div class="cell__media">
                    <i class="icon-2x icon-earth u-color-lightGreen"></i>
                  </div>
                  <div class="cell__content">
                    <h6 class="u-mb-0">Business</h6>
                    <div class="u-text-muted u-fs-12">Around the world</div>
                  </div>
                </div>
              </c-col>
            </c-row>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel title="Overview">
            <c-row>
              <c-col xs="12" md="8" lg="6">
                <div class="cell cell--start u-mt-10 u-mb-10">
                  <div class="cell__media">
                    <i class="icon-2x icon-newspaper u-color-orange"></i>
                  </div>
                  <div class="cell__content">
                    <h6 class="u-mb-0">22 Aug 1993</h6>
                    <div class="u-text-muted u-fs-12">It's Friday</div>
                  </div>
                </div>
              </c-col>
              ...
            </c-row>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>
      <c-col md="12" lg="6">
        <x-codebox>
          <c-panel title="Total Revenue">
            <div class="u-stack-flex">
              <em class="u-fs-48 u-color-indigo">$23,091</em>
              <c-level class="u-text-muted u-mt-10 u-mb-10">
                Total Incomme:&nbsp;<i class="icon-arrow-up-right2 u-color-success"></i>10.25%
              </c-level>
            </div>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel title="Total Revenue">
            <div class="u-stack-flex">
              <em class="u-fs-48 u-color-indigo">$23,091</em>
              <c-level class="u-text-muted u-mt-10 u-mb-10">
                Total Incomme:&nbsp;<i class="icon-arrow-up-right2 u-color-success"></i>10.25%
              </c-level>
            </div>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>
      <c-col md="12" lg="6">
        <x-codebox>
          <c-panel title="Sales status">
            <div class="u-stack-flex">
              <em class="u-fs-48 u-color-danger">328</em>
              <c-level class="u-text-muted u-mt-10 u-mb-10">
                Total sales:&nbsp;<i class="icon-arrow-up-right2 u-color-success"></i>200%
              </c-level>
            </div>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel title="Sales status">
            <div class="u-stack-flex">
              <em class="u-fs-48 u-color-danger">328</em>
              <c-level class="u-text-muted u-mt-10 u-mb-10">
                Total sales:&nbsp;<i class="icon-arrow-up-right2 u-color-success"></i>200%
              </c-level>
            </div>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>
    </c-row>

    <c-row>
      <c-col lg="12">
        <x-codebox>
          <c-panel>
            <div class="u-stack-flex u-pt-30">
              <label class="u-fs-20 u-text-muted">Sales</label>
              <h2 class="u-fs-128 u-font-thin">87,392</h2>
            </div>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel>
            <div class="u-stack-flex u-pt-30">
              <label class="u-fs-20 u-text-muted">Sales</label>
              <h2 class="u-fs-128 u-lighter">87,392</h2>
            </div>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

      <c-col lg="12">
        <x-codebox>
          <c-panel>
            <c-level class="u-text-center">
              <c-level-item>
                <div class="u-text-muted">TWEETS</div>
                <em class="u-fs-32">2,314</em>
              </c-level-item>
              <c-level-item>
                <div class="u-text-muted">FOLLOWING</div>
                <em class="u-fs-32">64</em>
              </c-level-item>
              <c-level-item>
                <div class="u-text-muted">FOLLOWERS</div>
                <em class="u-fs-32">62,086</em>
              </c-level-item>
            </c-level>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel>
            <c-level class="u-text-center">
              <c-level-item>
                <div class="u-text-muted">TWEETS</div>
                <em class="u-fs-32">2,314</em>
              </c-level-item>
              <c-level-item>
                <div class="u-text-muted">FOLLOWING</div>
                <em class="u-fs-32">64</em>
              </c-level-item>
              <c-level-item>
                <div class="u-text-muted">FOLLOWERS</div>
                <em class="u-fs-32">62,086</em>
              </c-level-item>
            </c-level>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
        <x-codebox>
          <c-panel>
            <c-level class="u-text-center">
              <c-level-item>
                <c-progress-circle value="60" type="info">60%</c-progress-circle>
                <div class="u-mt-10">Progress</div>
              </c-level-item>
              <c-level-item>
                <c-progress-circle value="23" type="warning">48</c-progress-circle>
                <div class="u-mt-10">Pending</div>
              </c-level-item>
              <c-level-item>
                <c-progress-circle value="80" type="success">32</c-progress-circle>
                <div class="u-mt-10">Done</div>
              </c-level-item>
            </c-level>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel>
            <c-level class="u-text-center">
              <c-level-item>
                <c-progress-circle value="60" type="info">60%</c-progress-circle>
                <div class="u-mt-10">Progress</div>
              </c-level-item>
              <c-level-item>
                <c-progress-circle value="23" type="warning">48</c-progress-circle>
                <div class="u-mt-10">Pending</div>
              </c-level-item>
              <c-level-item>
                <c-progress-circle value="80" type="success">32</c-progress-circle>
                <div class="u-mt-10">Done</div>
              </c-level-item>
            </c-level>
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
          <c-panel title="Total Revenue">
            <div class="u-text-center">
              <c-progress-circle line-width="3" value="85" size="150" type="#1976d2">
                <em class="u-fs-48">255</em>
              </c-progress-circle>
            </div>
            <div class="u-mt-15 u-text-center">Total sales made tody</div>
            <c-level slot="footer">
              <c-level-item>
                <div class="u-fs-16">$300</div>
                <div class="u-fs-12 u-text-muted">Target</div>
              </c-level-item>
              <c-level-item>
                <div class="u-fs-16">$224</div>
                <div class="u-fs-12 u-text-muted">Last day</div>
              </c-level-item>
              <c-level-item>
                <div class="u-fs-16">$965</div>
                <div class="u-fs-12 u-text-muted">Last week</div>
              </c-level-item>
            </c-level>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel title="Total Revenue">
            <div class="u-text-center">
              <c-progress-circle line-width="3" value="85" size="150" type="#1976d2">
                <em class="u-fs-48">255</em>
              </c-progress-circle>
            </div>
            <div class="u-mt-15 u-text-center">Total sales made tody</div>
            <c-level slot="footer">
              <c-level-item>
                <div class="u-fs-16">$300</div>
                <div class="u-fs-12 u-text-muted">Target</div>
              </c-level-item>
              <c-level-item>
                <div class="u-fs-16">$224</div>
                <div class="u-fs-12 u-text-muted">Last day</div>
              </c-level-item>
              <c-level-item>
                <div class="u-fs-16">$965</div>
                <div class="u-fs-12 u-text-muted">Last week</div>
              </c-level-item>
            </c-level>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

      <c-col md="12" lg="8" xl="5">
        <x-codebox>
          <c-panel title="New Visitors">
            <label class="u-fs-32">23,892</label>
            <c-progress-bar type="info" size="sm" value="75"></c-progress-bar>
            <div class="u-text-muted">
              75% more than last month
            </div>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel title="New Visitors">
            <label class="u-fs-32">23,892</label>
            <c-progress-bar type="info" size="sm" value="75" />
            <div class="u-text-muted">
              75% more than last month
            </div>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
        <x-codebox>
          <c-panel title="New Orders">
            <label class="u-fs-32">6,991</label>
            <c-progress-bar type="warning" size="sm" value="35"></c-progress-bar>
            <div class="u-text-muted">
              35% more than last month
            </div>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel title="New Orders">
            <label class="u-fs-32">6,991</label>
            <c-progress-bar type="warning" size="sm" value="35" />
            <div class="u-text-muted">
              35% more than last month
            </div>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

      <c-col md="12" lg="8" xl="6">
        <x-codebox>
          <c-panel>
            <h3 class="u-fs-18 u-mb-30">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, nobis!
            </h3>
            <c-level class="u-color-muted">
              <span slot="left">Progress</span>
              <span slot="right" class="u-color-grey">87%</span>
            </c-level>
            <c-progress-bar type="info" value="87"></c-progress-bar>
            <c-level class="u-color-muted u-mt-15">
              <a role="button" slot="left">Read More</a>
              <template slot="right">
                <img :src="'static/images/avatar-f-0.jpg'" class="avatar avatar--sm u-ml-10" />
                <img :src="'static/images/avatar-m-1.jpg'" class="avatar avatar--sm u-ml-10" />
                <img :src="'static/images/avatar-f-2.jpg'" class="avatar avatar--sm u-ml-10" />
              </template>
            </c-level>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel>
          <h3 class="u-fs-18 u-mb-30">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, nobis!
          </h3>
          <c-level class="u-color-muted">
            <span slot="left">Progress</span>
            <span slot="right" class="u-color-grey">87%</span>
          </c-level>
          <c-progress-bar type="info" value="87" />
          <c-level class="u-color-muted u-mt-15">
            <a href="#" slot="left">Read More</a>
            <template slot="right">
              <img src="..." class="avatar avatar--sm u-ml-10" />
              <img src="..." class="avatar avatar--sm u-ml-10" />
              <img src="..." class="avatar avatar--sm u-ml-10" />
            </template>
          </c-level>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

      <c-col md="12" lg="8" xl="5">
        <x-codebox>
          <c-panel>
            <div class="u-mb-15">
              <c-level>
                <span slot="left">Google</span>
                <span slot="right" class="u-color-muted">65</span>
              </c-level>
              <c-progress-bar type="#397AF2" value="65"></c-progress-bar>
            </div>
            <div class="u-mb-15">
              <c-level>
                <span slot="left">Facebook</span>
                <span slot="right" class="u-color-muted">80</span>
              </c-level>
              <c-progress-bar type="#395CA9" value="80"></c-progress-bar>
            </div>
            <div class="u-mb-15">
              <c-level>
                <span slot="left">Twitter</span>
                <span slot="right" class="u-color-muted">50</span>
              </c-level>
              <c-progress-bar type="#3B94D9" value="50"></c-progress-bar>
            </div>
            <div>
              <c-level>
                <span slot="left">Instagram</span>
                <span slot="right" class="u-color-muted">35</span>
              </c-level>
              <c-progress-bar type="#003569" value="35"></c-progress-bar>
            </div>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel>
            <div class="u-mb-15">
              <c-level>
                <span slot="left">Google</span>
                <span slot="right" class="u-color-muted">65</span>
              </c-level>
              <c-progress-bar type="#397AF2" value="65" />
            </div>
            <div class="u-mb-15">
              <c-level>
                <span slot="left">Facebook</span>
                <span slot="right" class="u-color-muted">80</span>
              </c-level>
              <c-progress-bar type="#395CA9" value="80" />
            </div>
            ...
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

      <c-col md="12" lg="8" xl="5">
        <x-codebox>
          <c-panel title="Task To Do">
            <a role="button" class="u-text-muted" slot="control">
              <i class="icon-more"></i>
            </a>
            <c-level>
              <template slot="left">
                <em class="u-fs-48">8</em>
              </template>
              <template slot="right">
                <div class="u-text-right u-text-muted">
                  <div>70%</div>
                  <div>Last week: 4</div>
                </div>
              </template>
            </c-level>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel title="Task To Do">
            <a class="u-text-muted" slot="control">
              <i class="icon-more"></i>
            </a>
            <c-level>
              <template slot="left">
                <em class="u-fs-48">8</em>
              </template>
              <template slot="right">
                <div class="u-text-right u-text-muted">
                  <div>70%</div>
                  <div>Last week: 4</div>
                </div>
              </template>
            </c-level>
          </c-panel>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

      <c-col md="12" lg="8" xl="5">
        <x-codebox>
          <c-panel title="Browser Stats">
            <ul class="list list--lg">
              <li class="list__item">
                <c-level>
                  <div class="u-color-grey" slot="left">Google Chrome</div>
                  <template slot="right">
                    <c-level-item class="u-text-muted">80%</c-level-item>
                    <c-level-item>
                      <c-progress-circle type="warning" size="20" value="80"></c-progress-circle>
                    </c-level-item>
                  </template>
                </c-level>
              </li>
              <li class="list__item">
                <c-level>
                  <div class="u-color-grey" slot="left">Apple Safari</div>
                  <template slot="right">
                    <c-level-item class="u-text-muted">65%</c-level-item>
                    <c-level-item>
                      <c-progress-circle type="info" size="20" value="65"></c-progress-circle>
                    </c-level-item>
                  </template>
                </c-level>
              </li>
              <li class="list__item">
                <c-level>
                  <div class="u-color-grey" slot="left">Mozla Firefox</div>
                  <template slot="right">
                    <c-level-item class="u-text-muted">45%</c-level-item>
                    <c-level-item>
                      <c-progress-circle type="primary" size="20" value="45"></c-progress-circle>
                    </c-level-item>
                  </template>
                </c-level>
              </li>
              <li class="list__item">
                <c-level>
                  <div class="u-color-grey" slot="left">Internet Explorer</div>
                  <template slot="right">
                    <c-level-item class="u-text-muted">15%</c-level-item>
                    <c-level-item>
                      <c-progress-circle type="danger" size="20" value="15"></c-progress-circle>
                    </c-level-item>
                  </template>
                </c-level>
              </li>
            </ul>
          </c-panel>
          <template slot="code">
          <% markdown %>
          ```html
          <c-panel title="Browser Stats">
            <ul class="list">
              <li class="list__item">
                <c-level>
                  <div class="u-color-grey" slot="left">Google Chrome</div>
                  <template slot="right">
                    <c-level-item class="u-text-muted">50%</c-level-item>
                    <c-level-item>
                      <c-progress-circle type="info" size="20" value="50"></c-progress-circle>
                    </c-level-item>
                  </template>
                </c-level>
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
  </div>
</template>
