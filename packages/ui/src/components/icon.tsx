// components/Icon.tsx
import React from "react";

// Define the props for the Icon component
type IconProps = {
  name: string; // Name of the icon to render
  height?: string; // Optional height of the icon (default is '24px')
  width?: string; // Optional width of the icon (default is '24px')
  color?: string; // Optional color of the icon (default is 'currentColor')
};

const Icon: React.FC<IconProps> = ({
  name,
  height = "24px",
  width = "24px",
  color = "currentColor",
}) => {
  // Define a function that returns the correct SVG based on the icon name
  const renderIcon = () => {
    switch (name) {
      case "title":
        return (
          <svg
            width={width}
            height={height}
            viewBox="0 -2 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="heading-1" transform="translate(-2 -4)">
              <path
                id="primary"
                d="M19,19V9l-2,1"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <path
                id="primary-2"
                data-name="primary"
                d="M17,19h4M4,5V19M5,5H3M5,19H3M12,5V19M11,5h2M11,19h2M4,12h8"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </g>
          </svg>
        );
      case "subtitle":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
            viewBox="0 0 24 24"
            fill={color}
          >
            <g id="heading-2" transform="translate(-2 -4)">
              <path
                id="primary"
                d="M16,12v-.5A2.5,2.5,0,0,1,18.5,9h0A2.5,2.5,0,0,1,21,11.5v.33A2.52,2.52,0,0,1,19.74,14l-1.26.72A4.91,4.91,0,0,0,16,19h5"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <path
                id="primary-2"
                data-name="primary"
                d="M4,5V19M5,5H3M5,19H3M11,5V19M10,5h2M10,19h2M4,12h7"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </g>
          </svg>
        );
      case "paragraph":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
            viewBox="0 0 24 24"
            fill={color}
          >
            <path d="M22,3a1,1,0,0,1-1,1H9A1,1,0,0,1,9,2H21A1,1,0,0,1,22,3ZM21,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0,6H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0,6H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
          </svg>
        );
      case "separator":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
            viewBox="0 0 24 24"
            fill={color}
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M2 11h2v2H2v-2zm4 0h12v2H6v-2zm14 0h2v2h-2v-2z" />
            </g>
          </svg>
        );
      case "input":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
            viewBox="0 0 24 24"
            fill={color}
          >
            <path d="M2.5 4v3h5v12h3V7h5V4zm19 5h-9v3h3v7h3v-7h3z"></path>
          </svg>
        );
      case "textarea":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
            fill={color}
            viewBox="0 0 24 24"
          >
            <path d="M18,4 C18,3.44771525 18.4477153,3 19,3 L20,3 C20.5522847,3 21,3.44771525 21,4 L21,5 C21,5.55228475 20.5522847,6 20,6 L20,18 C20.5522847,18 21,18.4477153 21,19 L21,20 C21,20.5522847 20.5522847,21 20,21 L19,21 C18.4477153,21 18,20.5522847 18,20 L6,20 C6,20.5522847 5.55228475,21 5,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,19 C3,18.4477153 3.44771525,18 4,18 L4,6 C3.44771525,6 3,5.55228475 3,5 L3,4 C3,3.44771525 3.44771525,3 4,3 L5,3 C5.55228475,3 6,3.44771525 6,4 L18,4 Z M18,5 L6,5 C6,5.55228475 5.55228475,6 5,6 L5,18 C5.55228475,18 6,18.4477153 6,19 L18,19 C18,18.4477153 18.4477153,18 19,18 L19,6 C18.4477153,6 18,5.55228475 18,5 L18,5 Z M10,8 L10,11.5 C10,11.7761424 9.77614237,12 9.5,12 C9.22385763,12 9,11.7761424 9,11.5 L9,8 L7.5,8 C7.22385763,8 7,7.77614237 7,7.5 C7,7.22385763 7.22385763,7 7.5,7 L11.5,7 C11.7761424,7 12,7.22385763 12,7.5 C12,7.77614237 11.7761424,8 11.5,8 L10,8 Z M4,4 L4,5 L5,5 L5,4 L4,4 Z M19,4 L19,5 L20,5 L20,4 L19,4 Z M19,19 L19,20 L20,20 L20,19 L19,19 Z M4,19 L4,20 L5,20 L5,19 L4,19 Z M13.5,8 C13.2238576,8 13,7.77614237 13,7.5 C13,7.22385763 13.2238576,7 13.5,7 L16.5,7 C16.7761424,7 17,7.22385763 17,7.5 C17,7.77614237 16.7761424,8 16.5,8 L13.5,8 Z M13.5,11 C13.2238576,11 13,10.7761424 13,10.5 C13,10.2238576 13.2238576,10 13.5,10 L16.5,10 C16.7761424,10 17,10.2238576 17,10.5 C17,10.7761424 16.7761424,11 16.5,11 L13.5,11 Z M7.5,14 C7.22385763,14 7,13.7761424 7,13.5 C7,13.2238576 7.22385763,13 7.5,13 L16.5,13 C16.7761424,13 17,13.2238576 17,13.5 C17,13.7761424 16.7761424,14 16.5,14 L7.5,14 Z M7.5,17 C7.22385763,17 7,16.7761424 7,16.5 C7,16.2238576 7.22385763,16 7.5,16 L16.5,16 C16.7761424,16 17,16.2238576 17,16.5 C17,16.7761424 16.7761424,17 16.5,17 L7.5,17 Z" />
          </svg>
        );

      case "checkbox":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path
              d="M8 12L11 15L16 9M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "checkbox-group":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
            viewBox="0 0 24 24"
            fill={color}
          >
            <path
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5h10M11 9h5"
            />
            <rect
              width="4"
              height="4"
              x="3"
              y="5"
              fill="#000000"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              rx="1"
            />
            <path
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 15h10m-10 4h5"
            />
            <rect
              width="4"
              height="4"
              x="3"
              y="15"
              fill="#000000"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              rx="1"
            />
          </svg>
        );
      case "radio":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
            viewBox="0 0 24 24"
            fill={color}
          >
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path>
          </svg>
        );
      case "select":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
            viewBox="0 0 24 24"
            fill={color}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 12-4-4h8z"></path>
            \
          </svg>
        );

      case "file":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
            viewBox="0 0 24 24"
            fill={color}
          >
            <path
              d="M13 3L13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2V3ZM19 9H20C20 8.73478 19.8946 8.48043 19.7071 8.29289L19 9ZM13.109 8.45399L14 8V8L13.109 8.45399ZM13.546 8.89101L14 8L13.546 8.89101ZM10 13C10 12.4477 9.55228 12 9 12C8.44772 12 8 12.4477 8 13H10ZM8 16C8 16.5523 8.44772 17 9 17C9.55228 17 10 16.5523 10 16H8ZM8.5 9C7.94772 9 7.5 9.44772 7.5 10C7.5 10.5523 7.94772 11 8.5 11V9ZM9.5 11C10.0523 11 10.5 10.5523 10.5 10C10.5 9.44772 10.0523 9 9.5 9V11ZM8.5 6C7.94772 6 7.5 6.44772 7.5 7C7.5 7.55228 7.94772 8 8.5 8V6ZM9.5 8C10.0523 8 10.5 7.55228 10.5 7C10.5 6.44772 10.0523 6 9.5 6V8ZM17.908 20.782L17.454 19.891L17.454 19.891L17.908 20.782ZM18.782 19.908L19.673 20.362L18.782 19.908ZM5.21799 19.908L4.32698 20.362H4.32698L5.21799 19.908ZM6.09202 20.782L6.54601 19.891L6.54601 19.891L6.09202 20.782ZM6.09202 3.21799L5.63803 2.32698L5.63803 2.32698L6.09202 3.21799ZM5.21799 4.09202L4.32698 3.63803L4.32698 3.63803L5.21799 4.09202ZM12 3V7.4H14V3H12ZM14.6 10H19V8H14.6V10ZM12 7.4C12 7.66353 11.9992 7.92131 12.0169 8.13823C12.0356 8.36682 12.0797 8.63656 12.218 8.90798L14 8C14.0293 8.05751 14.0189 8.08028 14.0103 7.97537C14.0008 7.85878 14 7.69653 14 7.4H12ZM14.6 8C14.3035 8 14.1412 7.99922 14.0246 7.9897C13.9197 7.98113 13.9425 7.9707 14 8L13.092 9.78201C13.3634 9.92031 13.6332 9.96438 13.8618 9.98305C14.0787 10.0008 14.3365 10 14.6 10V8ZM12.218 8.90798C12.4097 9.2843 12.7157 9.59027 13.092 9.78201L14 8V8L12.218 8.90798ZM8 13V16H10V13H8ZM8.5 11H9.5V9H8.5V11ZM8.5 8H9.5V6H8.5V8ZM13 2H8.2V4H13V2ZM4 6.2V17.8H6V6.2H4ZM8.2 22H15.8V20H8.2V22ZM20 17.8V9H18V17.8H20ZM19.7071 8.29289L13.7071 2.29289L12.2929 3.70711L18.2929 9.70711L19.7071 8.29289ZM15.8 22C16.3436 22 16.8114 22.0008 17.195 21.9694C17.5904 21.9371 17.9836 21.8658 18.362 21.673L17.454 19.891C17.4045 19.9162 17.3038 19.9539 17.0322 19.9761C16.7488 19.9992 16.3766 20 15.8 20V22ZM18 17.8C18 18.3766 17.9992 18.7488 17.9761 19.0322C17.9539 19.3038 17.9162 19.4045 17.891 19.454L19.673 20.362C19.8658 19.9836 19.9371 19.5904 19.9694 19.195C20.0008 18.8114 20 18.3436 20 17.8H18ZM18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362L17.891 19.454C17.7951 19.6422 17.6422 19.7951 17.454 19.891L18.362 21.673ZM4 17.8C4 18.3436 3.99922 18.8114 4.03057 19.195C4.06287 19.5904 4.13419 19.9836 4.32698 20.362L6.10899 19.454C6.0838 19.4045 6.04612 19.3038 6.02393 19.0322C6.00078 18.7488 6 18.3766 6 17.8H4ZM8.2 20C7.62345 20 7.25117 19.9992 6.96784 19.9761C6.69617 19.9539 6.59545 19.9162 6.54601 19.891L5.63803 21.673C6.01641 21.8658 6.40963 21.9371 6.80497 21.9694C7.18864 22.0008 7.65645 22 8.2 22V20ZM4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673L6.54601 19.891C6.35785 19.7951 6.20487 19.6422 6.10899 19.454L4.32698 20.362ZM8.2 2C7.65645 2 7.18864 1.99922 6.80497 2.03057C6.40963 2.06287 6.01641 2.13419 5.63803 2.32698L6.54601 4.10899C6.59545 4.0838 6.69617 4.04612 6.96784 4.02393C7.25117 4.00078 7.62345 4 8.2 4V2ZM6 6.2C6 5.62345 6.00078 5.25117 6.02393 4.96784C6.04612 4.69617 6.0838 4.59545 6.10899 4.54601L4.32698 3.63803C4.13419 4.01641 4.06287 4.40963 4.03057 4.80497C3.99922 5.18864 4 5.65645 4 6.2H6ZM5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803L6.10899 4.54601C6.20487 4.35785 6.35785 4.20487 6.54601 4.10899L5.63803 2.32698Z"
              fill="#000000"
            />
          </svg>
        );

      case "drag-handle":
        return (
          <svg
            height={height}
            width={width}
            viewBox="0 0 24 24"
            fill={color}
            focusable="false"
            aria-hidden="true"
          >
            <path
              d="M14 6a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM15 9a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1ZM15 13a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1ZM9 9a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2H9ZM8 14a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM15 17a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1ZM8 18a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM9 5a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2H9Z"
              fill={color}
            />
          </svg>
        );
      case "search":
        return (
          <svg
            height={height}
            width={width}
            focusable="false"
            aria-hidden="true"
            fill={color}
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path>
          </svg>
        );
      case "edit":
        return (
          <svg
            height={height}
            width={width}
            focusable="false"
            aria-hidden="true"
            fill={color}
          >
            <path d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2-2.92 9.06-9.06.92.92L5.92 19H5zM18.37 3.29a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"></path>
          </svg>
        );
      case "delete":
        return (
          <svg
            height={height}
            width={width}
            focusable="false"
            aria-hidden="true"
            fill={color}
          >
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"></path>
          </svg>
        );

      case "image":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
            viewBox="0 0 24 24"
            fill={color}
          >
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"></path>
          </svg>
        );
        case "website":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={height}
              width={width}
              viewBox="0 0 24 24"
              fill={color}
            >
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"></path>
            </svg>
          );  
      case "number":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
            viewBox="0 0 24 24"
            fill={color}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.99999 5.5C5.99999 5.22386 5.77613 5 5.49999 5C5.22385 5 4.99999 5.22386 4.99999 5.5V8.5C4.99999 8.77614 5.22385 9 5.49999 9C5.77613 9 5.99999 8.77614 5.99999 8.5V5.5ZM5.25046 11.2673C5.38308 11.1789 5.55766 11.1864 5.68212 11.286C5.85245 11.4223 5.86653 11.6764 5.71228 11.8306L4.39644 13.1464C4.25344 13.2894 4.21066 13.5045 4.28805 13.6913C4.36544 13.8782 4.54776 14 4.74999 14H6.49999C6.77613 14 6.99999 13.7761 6.99999 13.5C6.99999 13.2239 6.77613 13 6.49999 13H5.9571L6.41939 12.5377C6.99508 11.962 6.94256 11.0137 6.30681 10.5051C5.8423 10.1335 5.19072 10.1053 4.69576 10.4352L4.47264 10.584C4.24288 10.7372 4.18079 11.0476 4.33397 11.2773C4.48714 11.5071 4.79758 11.5692 5.02734 11.416L5.25046 11.2673ZM4.74999 15.5C4.47385 15.5 4.24999 15.7239 4.24999 16C4.24999 16.2761 4.47385 16.5 4.74999 16.5H5.29288L4.64644 17.1464C4.50344 17.2894 4.46066 17.5045 4.53805 17.6913C4.61544 17.8782 4.79776 18 4.99999 18H5.74999C5.88806 18 5.99999 18.1119 5.99999 18.25C5.99999 18.3881 5.88806 18.5 5.74999 18.5H4.74999C4.47385 18.5 4.24999 18.7239 4.24999 19C4.24999 19.2761 4.47385 19.5 4.74999 19.5H5.74999C6.44035 19.5 6.99999 18.9404 6.99999 18.25C6.99999 17.6972 6.6412 17.2283 6.1438 17.0633L6.85355 16.3536C6.99654 16.2106 7.03932 15.9955 6.96193 15.8087C6.88454 15.6218 6.70222 15.5 6.49999 15.5H4.74999ZM8.99999 6C8.44771 6 7.99999 6.44772 7.99999 7C7.99999 7.55228 8.44771 8 8.99999 8H19C19.5523 8 20 7.55228 20 7C20 6.44772 19.5523 6 19 6H8.99999ZM8.99999 11C8.44771 11 7.99999 11.4477 7.99999 12C7.99999 12.5523 8.44771 13 8.99999 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H8.99999ZM8.99999 16C8.44771 16 7.99999 16.4477 7.99999 17C7.99999 17.5523 8.44771 18 8.99999 18H19C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16H8.99999Z"
              fill="#000000"
            />
          </svg>
        );
        case "color":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
            viewBox="0 0 24 24"
            fill={color}
          >
            <path d="m16.81 8.94-3.75-3.75L4 14.25V18h3.75zM6 16v-.92l7.06-7.06.92.92L6.92 16zm13.71-9.96c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75zM2 20h20v4H2z"></path>
          </svg>
        );

      case "email":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
            viewBox="0 0 24 24"
            fill={color}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
              fill="#080341"
            />
          </svg>
        );

        case "link":
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={height}
              width={width}
              viewBox="0 0 24 24"
              fill={color}
            >
              <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6z"></path>
            </svg>
          );  

      // Add more cases as needed for different icons
      default:
        return null; // Return null if no matching icon is found
    }
  };

  return <>{renderIcon()}</>; // Render the SVG icon
};

export default Icon;
