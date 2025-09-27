// Global script state management
let scriptLoaded = false;
let scriptLoading = false;

export const loadCalendlyScript = (): Promise<void> => {
  return new Promise((resolve) => {
    if (scriptLoaded) {
      resolve();
      return;
    }
    
    if (scriptLoading) {
      // Wait for existing script to load
      const checkScript = () => {
        if (scriptLoaded) {
          resolve();
        } else {
          setTimeout(checkScript, 100);
        }
      };
      checkScript();
      return;
    }

    scriptLoading = true;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      scriptLoaded = true;
      scriptLoading = false;
      resolve();
    };
    script.onerror = () => {
      scriptLoading = false;
      resolve();
    };
    document.head.appendChild(script);
  });
};

export const initializeCalendlyWidget = (
  container: HTMLElement, 
  calendlyUrl: string
): void => {
  if (!container) return;

  // Clear any existing content
  container.innerHTML = '';
  
  // Create the widget div with data attributes
  const widgetDiv = document.createElement('div');
  widgetDiv.className = 'calendly-inline-widget';
  widgetDiv.setAttribute('data-url', calendlyUrl);
  widgetDiv.setAttribute('data-resize', 'true');
  widgetDiv.style.minWidth = '320px';
  widgetDiv.style.height = '700px';
  widgetDiv.style.width = '100%';
  
  container.appendChild(widgetDiv);
};

export const setupCalendlyWidget = async (
  container: HTMLElement | null, 
  calendlyUrl: string
): Promise<void> => {
  if (!container) return;

  await loadCalendlyScript();
  
  // Add a delay to ensure DOM is ready and script is fully loaded
  setTimeout(() => {
    initializeCalendlyWidget(container, calendlyUrl);
  }, 300);
};