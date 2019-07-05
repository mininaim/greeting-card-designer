var CardView = function () {
    this.addCardEvent = new CustomEvent('ADD_CARD');
    this.init();
}

CardView.prototype = {

    init: function () {
        this.getViewElementsWithEvents();
    },

    getViewElementsWithEvents: function () {
        this.$window = window;
        this.$createCardForm = document.querySelector('[data-name=frmCreateCard]');
        this.$frameListElement = document.querySelector('[data-name=frameList]');
        return this;
    },

    show: function (htmlElement) {
        htmlElement.classList.remove('d-none');
    },

    hide: function (htmlElement) {
        htmlElement.classList.add('d-none');
    },

    showFrameImagePreview: function (value) {
        var previewImg = document.querySelector('[data-name=frame-preview-img]');

        if (previewImg) {
            previewImg.setAttribute('src', 'https://dummyimage.com/' + value + '/f2f4f5/525252');
            document.querySelector('[data-name=frame-preview-block]').classList.remove('d-none');
        }
    },

    hideFrameImagePreview: function () {
        document.querySelector('[data-name=frame-preview-block]').classList.add('d-none');
    },

    listCards: function (event) {
        // console.log('list cards', event);
    },

    displayGetStartedBlock: function () {
        var getStartedBlock = document.querySelector('[data-name=get_started_block]');
        if (getStartedBlock instanceof HTMLElement) {
            getStartedBlock.classList.remove('d-none');
            // document.querySelector('[data-name=btn-create-card]').addEventListener('click', ());
        }
    },

    designCard: function () {

        //TODO replace cards.html by design.html
        window.location.href = "cards.html?" + $.param(cardObject);
    },

    renderCardData: function (data) {
        this.updateCardCounter(data);
        if (data.length > 0) {
            return this.showCardList(data);
        }

        this.displayGetStartedBlock();
    },

    showCardList: function (data) {
        this.show(document.querySelector('[data-name=card-list]'));

        var cardListHtml = document.querySelector('[data-card-list-view]');
        this.renderView('cardListTemplate', cardListHtml.innerText, data, '[data-name=card-items]');
    },

    updateCardCounter: function (cardList) {
        document.querySelector('[data-card-count]').innerHTML = cardList.length;
    },

    renderView: function (templateName, htmlString, data, appendToElementSelector) {
        $.template(templateName, htmlString.trim());
        $.tmpl(templateName, data).appendTo(appendToElementSelector);
    }
}