<script>
import CodeBox from '../../components/CodeBox';
export default {
  name: 'PopupWidgets',
  components: {
    'x-codebox': CodeBox
  }
};
</script>

<template lang="nunjucks">
  <div>
    <c-row>

      <c-col lg="12" xl="8">
        <x-codebox class="u-mb-15">
          <section class="modal modal--lg">
            <header class="modal__header">
              <a role="button" class="modal__close">
                <i class="i-remove"></i>
              </a>
            </header>
            <div class="modal__body">
              <div class="u-text-center u-pl-30 u-pr-30">
                <i class="u-fs-48 u-inline-block u-mb-15 icon-lock u-color-primary"></i>
                <h3>This Post is password protected</h3>
                <p class="u-text-muted">Please enter the password to view this article.</p>
                <c-form-input class="u-mb-15" type="password" value="123456" size="lg"></c-form-input>
                <c-button type="primary" smart>Submit</c-button>
              </div>
            </div>
          </section>
          <template slot="code">
          <% markdown %>
          ```html
          <c-modal>
            <div class="u-text-center u-pl-30 u-pr-30">
              <i class="u-fs-48 u-inline-block u-mb-15 icon-lock u-color-primary"></i>
              <h3>This Post is password protected</h3>
              <p class="u-text-muted">Please enter the password to view this article.</p>
              <c-form-input class="u-mb-15" type="password" value="123456" size="lg"></c-form-input>
              <c-button type="primary" smart>Submit</c-button>
            </div>
          </c-modal>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

      <c-col lg="12" xl="8">
        <x-codebox class="u-mb-15">
          <section class="modal modal--lg">
            <header class="modal__header">
              <h4 class="modal__title">New project</h4>
              <a role="button" class="modal__close">
                <i class="i-remove"></i>
              </a>
            </header>
            <div class="modal__body">
              <c-row>
                <c-col md="8">
                  <c-form-field label="Owner">
                    <c-form-select
                      value="1"
                      :options="[
                        {value: '1', label: 'Spence Barlow'},
                        {value: '2', label: 'Cruz Oneal'},
                        {value: '3', label: 'Mosley Palmer'},
                        {value: '4', label: 'Lula Holder'},
                        {value: '5', label: 'Barnett Riley'}
                      ]"
                    ></c-form-select>
                  </c-form-field>
                </c-col>
                <c-col md="16">
                  <c-form-field label="Project Name">
                    <c-form-input></c-form-input>
                  </c-form-field>
                </c-col>
              </c-row>
              <c-form-field label="Description">
                <c-form-input></c-form-input>
              </c-form-field>
              <c-form-field>
                <c-form-radio name="public" value="1" label="Public"></c-form-radio>
                <c-form-radio name="public" value="0" label="Private"></c-form-radio>
              </c-form-field>
            </div>
            <footer class="modal__footer">
              <div class="u-text-center">
                <c-button type="primary" smart>Create project</c-button>
              </div>
            </footer>
          </section>
          <template slot="code">
          <% markdown %>
          ```html
          <c-modal title="New project">
            <c-row>
              <c-col md="8">
                <c-form-field label="Owner">
                  <c-form-select
                    value="1"
                    :options="[
                      {value: '1', label: 'Spence Barlow'},
                      {value: '2', label: 'Cruz Oneal'},
                      {value: '3', label: 'Mosley Palmer'},
                      {value: '4', label: 'Lula Holder'},
                      {value: '5', label: 'Barnett Riley'}
                    ]"
                  ></c-form-select>
                </c-form-field>
              </col>
              <c-col md="16">
                <c-form-field label="Project Name">
                  <c-form-input></c-form-input>
                </c-form-field>
              </c-col>
            </c-row>
            <c-form-field label="Description">
              <c-form-input></c-form-input>
            </c-form-field>
            <c-form-field>
              <c-form-radio name="public" value="1" label="Public"></c-form-radio>
              <c-form-radio name="public" value="0" label="Private"></c-form-radio>
            </c-form-field>

            <div class="u-text-center" slot="footer">
              <c-button type="primary" smart>Create project</c-button>
            </div>
          </c-modal>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

      <c-col lg="12" xl="8">
        <x-codebox class="u-mb-15">
          <section class="modal modal--lg">
            <header class="modal__header">
              <h4 class="modal__title">Invite new members</h4>
              <a role="button" class="modal__close">
                <i class="i-remove"></i>
              </a>
            </header>
            <div class="modal__body">
              <c-form-field label="Email address">
                <c-form-input type="email"></c-form-input>
              </c-form-field>
              <c-form-field>
                <a role="button" class="u-inline-flex">
                  <i class="icon-plus-circle u-mr-5"></i> Add another persion
                </a>
              </c-form-field>
              <hr />
              <p class="u-text-muted u-text-center">
                You'll be charged an invitation for each new member.
              </p>
            </div>
            <footer class="modal__footer">
              <div class="u-text-right">
                <c-button type="primary" smart>Invite</c-button>
              </div>
            </footer>
          </section>
          <template slot="code">
          <% markdown %>
          ```html
          <c-modal title="Invite new members">
            <c-form-field label="Email address">
              <c-form-input type="email"></c-form-input>
            </c-form-field>
            <c-form-field>
              <a class="u-inline-flex">
                <i class="icon-plus-circle"></i> Add another persion
              </a>
            </c-form-field>
            <hr />
            <p class="u-text-muted u-text-center">
              You'll be charged an invitation for each new member.
            </p>

            <div class="u-text-right" slot="footer">
              <c-button type="primary" smart>Invite</c-button>
            </div>
          </c-modal>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

      <c-col lg="12" xl="8">
        <x-codebox class="u-mb-15">
          <section class="modal modal--lg">
            <header class="modal__header">
              <h4 class="modal__title">
                <i class="icon-bin u-color-danger u-mr-10"></i>Delete this article?
              </h4>
              <a role="button" class="modal__close">
                <i class="i-remove"></i>
              </a>
            </header>
            <div class="modal__body">
              <div class="u-color-grey">
                If you delete this article, it will be gone forever. Are you sure you want to proceed?
              </div>
            </div>
            <footer class="modal__footer">
              <div class="u-text-right">
                <c-button type="ghost">Cancel</c-button>
                <c-button type="danger">Delete</c-button>
              </div>
            </footer>
          </section>
          <template slot="code">
          <% markdown %>
          ```html
          <c-modal title="<i class='icon-bin u-color-danger u-mr-10'></i>Delete this article?">
            <div class="u-color-grey">
              If you delete this article, it will be gone forever. Are you sure you want to proceed?
            </div>

            <div class="u-text-right" slot="footer">
              <c-button type="ghost">Cancel</c-button>
              <c-button type="danger">Delete</c-button>
            </div>
          </c-modal>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>

      <c-col lg="12" xl="8">
        <x-codebox class="u-mb-15">
          <section class="modal modal--lg">
            <header class="modal__header">
              <h4 class="modal__title">
                <i class="icon-plus-circle u-color-primary u-mr-10"></i>Create events
              </h4>
              <a role="button" class="modal__close">
                <i class="i-remove"></i>
              </a>
            </header>
            <div class="modal__body">
              <c-form layout="horizontal" span="100">
                <c-form-field label="Event Name">
                  <c-form-input></c-form-input>
                </c-form-field>
                <c-form-field label="Location">
                  <c-form-input></c-form-input>
                </c-form-field>
                <c-form-field label="Start Time">
                  <c-form-input></c-form-input>
                </c-form-field>
                <c-form-field label="End Time">
                  <c-form-input></c-form-input>
                </c-form-field>
                <c-form-field>
                  <c-button type="primary" smart>ADD EVENTS</c-button>
                </c-form-field>
              </c-form>
            </div>
          </section>
          <template slot="code">
          <% markdown %>
          ```html
          <c-modal title="<i class='icon-plus-circle u-color-primary u-mr-10'></i>Create events">
            <c-form layout="horizontal" span="100">
              <c-form-field label="Event Name">
                <c-form-input></c-form-input>
              </c-form-field>
              <c-form-field label="Location">
                <c-form-input></c-form-input>
              </c-form-field>
              <c-form-field label="Start Time">
                <c-form-input></c-form-input>
              </c-form-field>
              <c-form-field label="End Time">
                <c-form-input></c-form-input>
              </c-form-field>
              <c-form-field>
                <c-button type="primary" smart>ADD EVENTS</c-button>
              </c-form-field>
            </c-form>
          </c-modal>
          ```
          <% endmarkdown %>
          </template>
        </x-codebox>
      </c-col>
    </c-row>
  </div>
</template>
