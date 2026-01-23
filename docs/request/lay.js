/**
 * Noah Interior Request
 */
const siteConfig = {
    meta: {
        framework: 'V4',
        type: 'form',
        mode: 'demo',
        lang: 'ko',
        theme: false
    },
    api: {
        server: 'damso',
        turnstile: '0x4AAAAAACJQlCjpqGMqegcx',
        redirect: '../'
    },
    allowed_extensions: ['jpg', 'png', 'pdf', 'zip']
};

document.addEventListener('DOMContentLoaded', () => {
    if (window.V4) {
        window.V4.init(siteConfig).then(() => {
            initCustomLogic();
        });
    }
});

function initCustomLogic() {
    // 1. Dynamic Sub-Options
    const typeSelect = document.querySelector('[data-ref="construction_type"]');
    const subOptContainer = document.querySelector('[data-ref="sub-options-container"]');
    const subOptGroups = document.querySelectorAll('[data-group="sub-opt"]');

    const updateSubOptions = () => {
        if (!typeSelect) return;
        const val = typeSelect.value;

        subOptGroups.forEach(el => el.hidden = true);
        if (subOptContainer) subOptContainer.hidden = true;

        if (val) {
            const target = document.querySelector(`[data-ref="opt-${val}"]`);
            if (target) {
                if (subOptContainer) subOptContainer.hidden = false;
                target.hidden = false;
            }
        }
    };

    if (typeSelect) {
        typeSelect.addEventListener('change', updateSubOptions);
        updateSubOptions();
    }

    // 2. Area Calculation
    const sizeInput = document.querySelector('[data-ref="size_input"]');
    const sizeUnitSelect = document.querySelector('[data-ref="size_unit"]');
    const calcValSpan = document.querySelector('[data-ref="calc_val"]');
    const PY_TO_M2 = 3.305785;

    const updateAreaCalc = () => {
        if (!sizeInput || !sizeUnitSelect || !calcValSpan) return;
        const val = parseFloat(sizeInput.value);
        if (isNaN(val)) {
            calcValSpan.textContent = '-';
            return;
        }

        const selectedUnit = sizeUnitSelect.value;

        if (selectedUnit === 'py') {
            const m2 = (val * PY_TO_M2).toFixed(2);
            calcValSpan.textContent = `${m2} ㎡`;
        } else {
            const py = (val / PY_TO_M2).toFixed(2);
            calcValSpan.textContent = `${py} 평`;
        }
    };

    if (sizeInput && sizeUnitSelect) {
        sizeInput.addEventListener('input', updateAreaCalc);
        sizeInput.addEventListener('keyup', updateAreaCalc);
        sizeUnitSelect.addEventListener('change', updateAreaCalc);
    }

    // 3. Budget Formatting
    const budgetInput = document.querySelector('[data-ref="budget"]');
    if (budgetInput) {
        budgetInput.addEventListener('input', (e) => {
            let val = e.target.value;
            val = val.replace(/[^0-9]/g, '');

            if (!val) {
                e.target.value = '';
                return;
            }

            const num = parseInt(val, 10);
            e.target.value = num.toLocaleString();
        });
    }
}
