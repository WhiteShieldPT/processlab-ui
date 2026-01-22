import { clsx as Ze } from "clsx";
import { twMerge as et } from "tailwind-merge";
import { jsx as o, jsxs as d, Fragment as tt } from "react/jsx-runtime";
import { ChevronDown as J, MoreHorizontal as Ne, ChevronRight as G, ChevronLeft as ye, ArrowRight as at, ArrowLeft as ot, Check as W, X as fe, Search as rt, Circle as Z, Dot as st, GripVertical as nt, ChevronUp as it, PanelLeft as dt, FlaskConical as lt } from "lucide-react";
import * as r from "react";
import * as E from "@radix-ui/react-accordion";
import { cva as z } from "class-variance-authority";
import * as w from "@radix-ui/react-alert-dialog";
import { Slot as L } from "@radix-ui/react-slot";
import * as ct from "@radix-ui/react-aspect-ratio";
import * as H from "@radix-ui/react-avatar";
import { DayPicker as mt } from "react-day-picker";
import ut from "embla-carousel-react";
import * as pe from "recharts";
import * as le from "@radix-ui/react-checkbox";
import * as ge from "@radix-ui/react-collapsible";
import { Command as C } from "cmdk";
import * as p from "@radix-ui/react-dialog";
import * as b from "@radix-ui/react-context-menu";
import { Drawer as D } from "vaul";
import * as h from "@radix-ui/react-dropdown-menu";
import { FormProvider as ft, Controller as pt, useFormContext as gt } from "react-hook-form";
import * as we from "@radix-ui/react-label";
import * as ee from "@radix-ui/react-hover-card";
import { OTPInput as bt, OTPInputContext as ht } from "input-otp";
import * as f from "@radix-ui/react-menubar";
import * as S from "@radix-ui/react-navigation-menu";
import * as U from "@radix-ui/react-popover";
import * as ce from "@radix-ui/react-progress";
import * as q from "@radix-ui/react-radio-group";
import * as be from "react-resizable-panels";
import * as j from "@radix-ui/react-scroll-area";
import * as v from "@radix-ui/react-select";
import * as Re from "@radix-ui/react-separator";
import * as X from "@radix-ui/react-tooltip";
import * as $ from "@radix-ui/react-slider";
import { useTheme as xt } from "next-themes";
import { Toaster as vt } from "sonner";
import { toast as pn } from "sonner";
import * as me from "@radix-ui/react-switch";
import * as B from "@radix-ui/react-tabs";
import * as T from "@radix-ui/react-toast";
import * as Ce from "@radix-ui/react-toggle";
import * as te from "@radix-ui/react-toggle-group";
function s(...t) {
  return et(Ze(t));
}
const us = E.Root, Nt = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(E.Item, { ref: a, className: s("border-b", t), ...e }));
Nt.displayName = "AccordionItem";
const yt = r.forwardRef(({ className: t, children: e, ...a }, n) => /* @__PURE__ */ o(E.Header, { className: "flex", children: /* @__PURE__ */ d(
  E.Trigger,
  {
    ref: n,
    className: s(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      t
    ),
    ...a,
    children: [
      e,
      /* @__PURE__ */ o(J, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
yt.displayName = E.Trigger.displayName;
const wt = r.forwardRef(({ className: t, children: e, ...a }, n) => /* @__PURE__ */ o(
  E.Content,
  {
    ref: n,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...a,
    children: /* @__PURE__ */ o("div", { className: s("pb-4 pt-0", t), children: e })
  }
));
wt.displayName = E.Content.displayName;
const Rt = z(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Ct = r.forwardRef(({ className: t, variant: e, ...a }, n) => /* @__PURE__ */ o("div", { ref: n, role: "alert", className: s(Rt({ variant: e }), t), ...a }));
Ct.displayName = "Alert";
const St = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o("h5", { ref: a, className: s("mb-1 font-medium leading-none tracking-tight", t), ...e })
);
St.displayName = "AlertTitle";
const Tt = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o("div", { ref: a, className: s("text-sm [&_p]:leading-relaxed", t), ...e })
);
Tt.displayName = "AlertDescription";
const F = z(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), ae = r.forwardRef(
  ({ className: t, variant: e, size: a, asChild: n = !1, ...i }, l) => /* @__PURE__ */ o(n ? L : "button", { className: s(F({ variant: e, size: a, className: t })), ref: l, ...i })
);
ae.displayName = "Button";
const fs = w.Root, ps = w.Trigger, kt = w.Portal, Se = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  w.Overlay,
  {
    className: s(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e,
    ref: a
  }
));
Se.displayName = w.Overlay.displayName;
const It = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ d(kt, { children: [
  /* @__PURE__ */ o(Se, {}),
  /* @__PURE__ */ o(
    w.Content,
    {
      ref: a,
      className: s(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        t
      ),
      ...e
    }
  )
] }));
It.displayName = w.Content.displayName;
const Mt = ({ className: t, ...e }) => /* @__PURE__ */ o("div", { className: s("flex flex-col space-y-2 text-center sm:text-left", t), ...e });
Mt.displayName = "AlertDialogHeader";
const Pt = ({ className: t, ...e }) => /* @__PURE__ */ o("div", { className: s("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t), ...e });
Pt.displayName = "AlertDialogFooter";
const Dt = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(w.Title, { ref: a, className: s("text-lg font-semibold", t), ...e }));
Dt.displayName = w.Title.displayName;
const _t = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(w.Description, { ref: a, className: s("text-sm text-muted-foreground", t), ...e }));
_t.displayName = w.Description.displayName;
const zt = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(w.Action, { ref: a, className: s(F(), t), ...e }));
zt.displayName = w.Action.displayName;
const At = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  w.Cancel,
  {
    ref: a,
    className: s(F({ variant: "outline" }), "mt-2 sm:mt-0", t),
    ...e
  }
));
At.displayName = w.Cancel.displayName;
const gs = ct.Root, Lt = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  H.Root,
  {
    ref: a,
    className: s("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", t),
    ...e
  }
));
Lt.displayName = H.Root.displayName;
const Ot = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(H.Image, { ref: a, className: s("aspect-square h-full w-full", t), ...e }));
Ot.displayName = H.Image.displayName;
const jt = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  H.Fallback,
  {
    ref: a,
    className: s("flex h-full w-full items-center justify-center rounded-full bg-muted", t),
    ...e
  }
));
jt.displayName = H.Fallback.displayName;
const Et = z(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function bs({ className: t, variant: e, ...a }) {
  return /* @__PURE__ */ o("div", { className: s(Et({ variant: e }), t), ...a });
}
const Bt = r.forwardRef(({ ...t }, e) => /* @__PURE__ */ o("nav", { ref: e, "aria-label": "breadcrumb", ...t }));
Bt.displayName = "Breadcrumb";
const Ft = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o(
    "ol",
    {
      ref: a,
      className: s(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        t
      ),
      ...e
    }
  )
);
Ft.displayName = "BreadcrumbList";
const Gt = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o("li", { ref: a, className: s("inline-flex items-center gap-1.5", t), ...e })
);
Gt.displayName = "BreadcrumbItem";
const Ht = r.forwardRef(({ asChild: t, className: e, ...a }, n) => /* @__PURE__ */ o(t ? L : "a", { ref: n, className: s("transition-colors hover:text-foreground", e), ...a }));
Ht.displayName = "BreadcrumbLink";
const Vt = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o(
    "span",
    {
      ref: a,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: s("font-normal text-foreground", t),
      ...e
    }
  )
);
Vt.displayName = "BreadcrumbPage";
const $t = ({ children: t, className: e, ...a }) => /* @__PURE__ */ o("li", { role: "presentation", "aria-hidden": "true", className: s("[&>svg]:size-3.5", e), ...a, children: t ?? /* @__PURE__ */ o(G, {}) });
$t.displayName = "BreadcrumbSeparator";
const Kt = ({ className: t, ...e }) => /* @__PURE__ */ d(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: s("flex h-9 w-9 items-center justify-center", t),
    ...e,
    children: [
      /* @__PURE__ */ o(Ne, { className: "h-4 w-4" }),
      /* @__PURE__ */ o("span", { className: "sr-only", children: "More" })
    ]
  }
);
Kt.displayName = "BreadcrumbElipssis";
function Ut({ className: t, classNames: e, showOutsideDays: a = !0, ...n }) {
  return /* @__PURE__ */ o(
    mt,
    {
      showOutsideDays: a,
      className: s("p-3", t),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: s(
          F({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: s(F({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...e
      },
      components: {
        IconLeft: ({ ...i }) => /* @__PURE__ */ o(ye, { className: "h-4 w-4" }),
        IconRight: ({ ...i }) => /* @__PURE__ */ o(G, { className: "h-4 w-4" })
      },
      ...n
    }
  );
}
Ut.displayName = "Calendar";
const qt = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o("div", { ref: a, className: s("rounded-lg border bg-card text-card-foreground shadow-sm", t), ...e }));
qt.displayName = "Card";
const Wt = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o("div", { ref: a, className: s("flex flex-col space-y-1.5 p-6", t), ...e })
);
Wt.displayName = "CardHeader";
const Xt = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o("h3", { ref: a, className: s("text-2xl font-semibold leading-none tracking-tight", t), ...e })
);
Xt.displayName = "CardTitle";
const Yt = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o("p", { ref: a, className: s("text-sm text-muted-foreground", t), ...e })
);
Yt.displayName = "CardDescription";
const Qt = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o("div", { ref: a, className: s("p-6 pt-0", t), ...e })
);
Qt.displayName = "CardContent";
const Jt = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o("div", { ref: a, className: s("flex items-center p-6 pt-0", t), ...e })
);
Jt.displayName = "CardFooter";
const Te = r.createContext(null);
function oe() {
  const t = r.useContext(Te);
  if (!t)
    throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
const Zt = r.forwardRef(
  ({ orientation: t = "horizontal", opts: e, setApi: a, plugins: n, className: i, children: l, ...m }, u) => {
    const [N, c] = ut(
      {
        ...e,
        axis: t === "horizontal" ? "x" : "y"
      },
      n
    ), [k, A] = r.useState(!1), [O, _] = r.useState(!1), y = r.useCallback((x) => {
      x && (A(x.canScrollPrev()), _(x.canScrollNext()));
    }, []), I = r.useCallback(() => {
      c == null || c.scrollPrev();
    }, [c]), M = r.useCallback(() => {
      c == null || c.scrollNext();
    }, [c]), g = r.useCallback(
      (x) => {
        x.key === "ArrowLeft" ? (x.preventDefault(), I()) : x.key === "ArrowRight" && (x.preventDefault(), M());
      },
      [I, M]
    );
    return r.useEffect(() => {
      !c || !a || a(c);
    }, [c, a]), r.useEffect(() => {
      if (c)
        return y(c), c.on("reInit", y), c.on("select", y), () => {
          c == null || c.off("select", y);
        };
    }, [c, y]), /* @__PURE__ */ o(
      Te.Provider,
      {
        value: {
          carouselRef: N,
          api: c,
          opts: e,
          orientation: t || ((e == null ? void 0 : e.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: I,
          scrollNext: M,
          canScrollPrev: k,
          canScrollNext: O
        },
        children: /* @__PURE__ */ o(
          "div",
          {
            ref: u,
            onKeyDownCapture: g,
            className: s("relative", i),
            role: "region",
            "aria-roledescription": "carousel",
            ...m,
            children: l
          }
        )
      }
    );
  }
);
Zt.displayName = "Carousel";
const ea = r.forwardRef(
  ({ className: t, ...e }, a) => {
    const { carouselRef: n, orientation: i } = oe();
    return /* @__PURE__ */ o("div", { ref: n, className: "overflow-hidden", children: /* @__PURE__ */ o(
      "div",
      {
        ref: a,
        className: s("flex", i === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t),
        ...e
      }
    ) });
  }
);
ea.displayName = "CarouselContent";
const ta = r.forwardRef(
  ({ className: t, ...e }, a) => {
    const { orientation: n } = oe();
    return /* @__PURE__ */ o(
      "div",
      {
        ref: a,
        role: "group",
        "aria-roledescription": "slide",
        className: s("min-w-0 shrink-0 grow-0 basis-full", n === "horizontal" ? "pl-4" : "pt-4", t),
        ...e
      }
    );
  }
);
ta.displayName = "CarouselItem";
const aa = r.forwardRef(
  ({ className: t, variant: e = "outline", size: a = "icon", ...n }, i) => {
    const { orientation: l, scrollPrev: m, canScrollPrev: u } = oe();
    return /* @__PURE__ */ d(
      ae,
      {
        ref: i,
        variant: e,
        size: a,
        className: s(
          "absolute h-8 w-8 rounded-full",
          l === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          t
        ),
        disabled: !u,
        onClick: m,
        ...n,
        children: [
          /* @__PURE__ */ o(ot, { className: "h-4 w-4" }),
          /* @__PURE__ */ o("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
aa.displayName = "CarouselPrevious";
const oa = r.forwardRef(
  ({ className: t, variant: e = "outline", size: a = "icon", ...n }, i) => {
    const { orientation: l, scrollNext: m, canScrollNext: u } = oe();
    return /* @__PURE__ */ d(
      ae,
      {
        ref: i,
        variant: e,
        size: a,
        className: s(
          "absolute h-8 w-8 rounded-full",
          l === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          t
        ),
        disabled: !u,
        onClick: m,
        ...n,
        children: [
          /* @__PURE__ */ o(at, { className: "h-4 w-4" }),
          /* @__PURE__ */ o("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
oa.displayName = "CarouselNext";
const ra = { light: "", dark: ".dark" }, ke = r.createContext(null);
function Ie() {
  const t = r.useContext(ke);
  if (!t)
    throw new Error("useChart must be used within a <ChartContainer />");
  return t;
}
const sa = r.forwardRef(({ id: t, className: e, children: a, config: n, ...i }, l) => {
  const m = r.useId(), u = `chart-${t || m.replace(/:/g, "")}`;
  return /* @__PURE__ */ o(ke.Provider, { value: { config: n }, children: /* @__PURE__ */ d(
    "div",
    {
      "data-chart": u,
      ref: l,
      className: s(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        e
      ),
      ...i,
      children: [
        /* @__PURE__ */ o(na, { id: u, config: n }),
        /* @__PURE__ */ o(pe.ResponsiveContainer, { children: a })
      ]
    }
  ) });
});
sa.displayName = "Chart";
const na = ({ id: t, config: e }) => {
  const a = Object.entries(e).filter(([n, i]) => i.theme || i.color);
  return a.length ? /* @__PURE__ */ o(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(ra).map(
          ([n, i]) => `
${i} [data-chart=${t}] {
${a.map(([l, m]) => {
            var N;
            const u = ((N = m.theme) == null ? void 0 : N[n]) || m.color;
            return u ? `  --color-${l}: ${u};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, hs = pe.Tooltip, ia = r.forwardRef(
  ({
    active: t,
    payload: e,
    className: a,
    indicator: n = "dot",
    hideLabel: i = !1,
    hideIndicator: l = !1,
    label: m,
    labelFormatter: u,
    labelClassName: N,
    formatter: c,
    color: k,
    nameKey: A,
    labelKey: O
  }, _) => {
    const { config: y } = Ie(), I = r.useMemo(() => {
      var V;
      if (i || !(e != null && e.length))
        return null;
      const [g] = e, x = `${O || g.dataKey || g.name || "value"}`, R = ue(y, g, x), P = !O && typeof m == "string" ? ((V = y[m]) == null ? void 0 : V.label) || m : R == null ? void 0 : R.label;
      return u ? /* @__PURE__ */ o("div", { className: s("font-medium", N), children: u(P, e) }) : P ? /* @__PURE__ */ o("div", { className: s("font-medium", N), children: P }) : null;
    }, [m, u, e, i, N, y, O]);
    if (!t || !(e != null && e.length))
      return null;
    const M = e.length === 1 && n !== "dot";
    return /* @__PURE__ */ d(
      "div",
      {
        ref: _,
        className: s(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          a
        ),
        children: [
          M ? null : I,
          /* @__PURE__ */ o("div", { className: "grid gap-1.5", children: e.map((g, x) => {
            const R = `${A || g.name || g.dataKey || "value"}`, P = ue(y, g, R), V = k || g.payload.fill || g.color;
            return /* @__PURE__ */ o(
              "div",
              {
                className: s(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  n === "dot" && "items-center"
                ),
                children: c && (g == null ? void 0 : g.value) !== void 0 && g.name ? c(g.value, g.name, g, x, g.payload) : /* @__PURE__ */ d(tt, { children: [
                  P != null && P.icon ? /* @__PURE__ */ o(P.icon, {}) : !l && /* @__PURE__ */ o(
                    "div",
                    {
                      className: s("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                        "h-2.5 w-2.5": n === "dot",
                        "w-1": n === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                        "my-0.5": M && n === "dashed"
                      }),
                      style: {
                        "--color-bg": V,
                        "--color-border": V
                      }
                    }
                  ),
                  /* @__PURE__ */ d(
                    "div",
                    {
                      className: s(
                        "flex flex-1 justify-between leading-none",
                        M ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ d("div", { className: "grid gap-1.5", children: [
                          M ? I : null,
                          /* @__PURE__ */ o("span", { className: "text-muted-foreground", children: (P == null ? void 0 : P.label) || g.name })
                        ] }),
                        g.value && /* @__PURE__ */ o("span", { className: "font-mono font-medium tabular-nums text-foreground", children: g.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              g.dataKey
            );
          }) })
        ]
      }
    );
  }
);
ia.displayName = "ChartTooltip";
const xs = pe.Legend, da = r.forwardRef(({ className: t, hideIcon: e = !1, payload: a, verticalAlign: n = "bottom", nameKey: i }, l) => {
  const { config: m } = Ie();
  return a != null && a.length ? /* @__PURE__ */ o(
    "div",
    {
      ref: l,
      className: s("flex items-center justify-center gap-4", n === "top" ? "pb-3" : "pt-3", t),
      children: a.map((u) => {
        const N = `${i || u.dataKey || "value"}`, c = ue(m, u, N);
        return /* @__PURE__ */ d(
          "div",
          {
            className: s("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
            children: [
              c != null && c.icon && !e ? /* @__PURE__ */ o(c.icon, {}) : /* @__PURE__ */ o(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: u.color
                  }
                }
              ),
              c == null ? void 0 : c.label
            ]
          },
          u.value
        );
      })
    }
  ) : null;
});
da.displayName = "ChartLegend";
function ue(t, e, a) {
  if (typeof e != "object" || e === null)
    return;
  const n = "payload" in e && typeof e.payload == "object" && e.payload !== null ? e.payload : void 0;
  let i = a;
  return a in e && typeof e[a] == "string" ? i = e[a] : n && a in n && typeof n[a] == "string" && (i = n[a]), i in t ? t[i] : t[a];
}
const la = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  le.Root,
  {
    ref: a,
    className: s(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      t
    ),
    ...e,
    children: /* @__PURE__ */ o(le.Indicator, { className: s("flex items-center justify-center text-current"), children: /* @__PURE__ */ o(W, { className: "h-4 w-4" }) })
  }
));
la.displayName = le.Root.displayName;
const vs = ge.Root, Ns = ge.CollapsibleTrigger, ys = ge.CollapsibleContent, ca = p.Root, ws = p.Trigger, ma = p.Portal, Rs = p.Close, Me = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  p.Overlay,
  {
    ref: a,
    className: s(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e
  }
));
Me.displayName = p.Overlay.displayName;
const Pe = r.forwardRef(({ className: t, children: e, ...a }, n) => /* @__PURE__ */ d(ma, { children: [
  /* @__PURE__ */ o(Me, {}),
  /* @__PURE__ */ d(
    p.Content,
    {
      ref: n,
      className: s(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        t
      ),
      ...a,
      children: [
        e,
        /* @__PURE__ */ d(p.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ o(fe, { className: "h-4 w-4" }),
          /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Pe.displayName = p.Content.displayName;
const ua = ({ className: t, ...e }) => /* @__PURE__ */ o("div", { className: s("flex flex-col space-y-1.5 text-center sm:text-left", t), ...e });
ua.displayName = "DialogHeader";
const fa = ({ className: t, ...e }) => /* @__PURE__ */ o("div", { className: s("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t), ...e });
fa.displayName = "DialogFooter";
const pa = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  p.Title,
  {
    ref: a,
    className: s("text-lg font-semibold leading-none tracking-tight", t),
    ...e
  }
));
pa.displayName = p.Title.displayName;
const ga = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(p.Description, { ref: a, className: s("text-sm text-muted-foreground", t), ...e }));
ga.displayName = p.Description.displayName;
const De = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  C,
  {
    ref: a,
    className: s(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      t
    ),
    ...e
  }
));
De.displayName = C.displayName;
const Cs = ({ children: t, ...e }) => /* @__PURE__ */ o(ca, { ...e, children: /* @__PURE__ */ o(Pe, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ o(De, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: t }) }) }), ba = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ d("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ o(rt, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ o(
    C.Input,
    {
      ref: a,
      className: s(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      ...e
    }
  )
] }));
ba.displayName = C.Input.displayName;
const ha = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  C.List,
  {
    ref: a,
    className: s("max-h-[300px] overflow-y-auto overflow-x-hidden", t),
    ...e
  }
));
ha.displayName = C.List.displayName;
const xa = r.forwardRef((t, e) => /* @__PURE__ */ o(C.Empty, { ref: e, className: "py-6 text-center text-sm", ...t }));
xa.displayName = C.Empty.displayName;
const va = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  C.Group,
  {
    ref: a,
    className: s(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      t
    ),
    ...e
  }
));
va.displayName = C.Group.displayName;
const Na = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(C.Separator, { ref: a, className: s("-mx-1 h-px bg-border", t), ...e }));
Na.displayName = C.Separator.displayName;
const ya = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  C.Item,
  {
    ref: a,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      t
    ),
    ...e
  }
));
ya.displayName = C.Item.displayName;
const wa = ({ className: t, ...e }) => /* @__PURE__ */ o("span", { className: s("ml-auto text-xs tracking-widest text-muted-foreground", t), ...e });
wa.displayName = "CommandShortcut";
const Ss = b.Root, Ts = b.Trigger, ks = b.Group, Is = b.Portal, Ms = b.Sub, Ps = b.RadioGroup, Ra = r.forwardRef(({ className: t, inset: e, children: a, ...n }, i) => /* @__PURE__ */ d(
  b.SubTrigger,
  {
    ref: i,
    className: s(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      e && "pl-8",
      t
    ),
    ...n,
    children: [
      a,
      /* @__PURE__ */ o(G, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Ra.displayName = b.SubTrigger.displayName;
const Ca = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  b.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
Ca.displayName = b.SubContent.displayName;
const Sa = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(b.Portal, { children: /* @__PURE__ */ o(
  b.Content,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
) }));
Sa.displayName = b.Content.displayName;
const Ta = r.forwardRef(({ className: t, inset: e, ...a }, n) => /* @__PURE__ */ o(
  b.Item,
  {
    ref: n,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e && "pl-8",
      t
    ),
    ...a
  }
));
Ta.displayName = b.Item.displayName;
const ka = r.forwardRef(({ className: t, children: e, checked: a, ...n }, i) => /* @__PURE__ */ d(
  b.CheckboxItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t
    ),
    checked: a,
    ...n,
    children: [
      /* @__PURE__ */ o("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o(b.ItemIndicator, { children: /* @__PURE__ */ o(W, { className: "h-4 w-4" }) }) }),
      e
    ]
  }
));
ka.displayName = b.CheckboxItem.displayName;
const Ia = r.forwardRef(({ className: t, children: e, ...a }, n) => /* @__PURE__ */ d(
  b.RadioItem,
  {
    ref: n,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t
    ),
    ...a,
    children: [
      /* @__PURE__ */ o("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o(b.ItemIndicator, { children: /* @__PURE__ */ o(Z, { className: "h-2 w-2 fill-current" }) }) }),
      e
    ]
  }
));
Ia.displayName = b.RadioItem.displayName;
const Ma = r.forwardRef(({ className: t, inset: e, ...a }, n) => /* @__PURE__ */ o(
  b.Label,
  {
    ref: n,
    className: s("px-2 py-1.5 text-sm font-semibold text-foreground", e && "pl-8", t),
    ...a
  }
));
Ma.displayName = b.Label.displayName;
const Pa = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(b.Separator, { ref: a, className: s("-mx-1 my-1 h-px bg-border", t), ...e }));
Pa.displayName = b.Separator.displayName;
const Da = ({ className: t, ...e }) => /* @__PURE__ */ o("span", { className: s("ml-auto text-xs tracking-widest text-muted-foreground", t), ...e });
Da.displayName = "ContextMenuShortcut";
const _a = ({ shouldScaleBackground: t = !0, ...e }) => /* @__PURE__ */ o(D.Root, { shouldScaleBackground: t, ...e });
_a.displayName = "Drawer";
const Ds = D.Trigger, za = D.Portal, _s = D.Close, _e = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(D.Overlay, { ref: a, className: s("fixed inset-0 z-50 bg-black/80", t), ...e }));
_e.displayName = D.Overlay.displayName;
const Aa = r.forwardRef(({ className: t, children: e, ...a }, n) => /* @__PURE__ */ d(za, { children: [
  /* @__PURE__ */ o(_e, {}),
  /* @__PURE__ */ d(
    D.Content,
    {
      ref: n,
      className: s(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        t
      ),
      ...a,
      children: [
        /* @__PURE__ */ o("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        e
      ]
    }
  )
] }));
Aa.displayName = "DrawerContent";
const La = ({ className: t, ...e }) => /* @__PURE__ */ o("div", { className: s("grid gap-1.5 p-4 text-center sm:text-left", t), ...e });
La.displayName = "DrawerHeader";
const Oa = ({ className: t, ...e }) => /* @__PURE__ */ o("div", { className: s("mt-auto flex flex-col gap-2 p-4", t), ...e });
Oa.displayName = "DrawerFooter";
const ja = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  D.Title,
  {
    ref: a,
    className: s("text-lg font-semibold leading-none tracking-tight", t),
    ...e
  }
));
ja.displayName = D.Title.displayName;
const Ea = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(D.Description, { ref: a, className: s("text-sm text-muted-foreground", t), ...e }));
Ea.displayName = D.Description.displayName;
const zs = h.Root, As = h.Trigger, Ls = h.Group, Os = h.Portal, js = h.Sub, Es = h.RadioGroup, Ba = r.forwardRef(({ className: t, inset: e, children: a, ...n }, i) => /* @__PURE__ */ d(
  h.SubTrigger,
  {
    ref: i,
    className: s(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      e && "pl-8",
      t
    ),
    ...n,
    children: [
      a,
      /* @__PURE__ */ o(G, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Ba.displayName = h.SubTrigger.displayName;
const Fa = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  h.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
Fa.displayName = h.SubContent.displayName;
const Ga = r.forwardRef(({ className: t, sideOffset: e = 4, ...a }, n) => /* @__PURE__ */ o(h.Portal, { children: /* @__PURE__ */ o(
  h.Content,
  {
    ref: n,
    sideOffset: e,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...a
  }
) }));
Ga.displayName = h.Content.displayName;
const Ha = r.forwardRef(({ className: t, inset: e, ...a }, n) => /* @__PURE__ */ o(
  h.Item,
  {
    ref: n,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e && "pl-8",
      t
    ),
    ...a
  }
));
Ha.displayName = h.Item.displayName;
const Va = r.forwardRef(({ className: t, children: e, checked: a, ...n }, i) => /* @__PURE__ */ d(
  h.CheckboxItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t
    ),
    checked: a,
    ...n,
    children: [
      /* @__PURE__ */ o("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o(h.ItemIndicator, { children: /* @__PURE__ */ o(W, { className: "h-4 w-4" }) }) }),
      e
    ]
  }
));
Va.displayName = h.CheckboxItem.displayName;
const $a = r.forwardRef(({ className: t, children: e, ...a }, n) => /* @__PURE__ */ d(
  h.RadioItem,
  {
    ref: n,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t
    ),
    ...a,
    children: [
      /* @__PURE__ */ o("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o(h.ItemIndicator, { children: /* @__PURE__ */ o(Z, { className: "h-2 w-2 fill-current" }) }) }),
      e
    ]
  }
));
$a.displayName = h.RadioItem.displayName;
const Ka = r.forwardRef(({ className: t, inset: e, ...a }, n) => /* @__PURE__ */ o(
  h.Label,
  {
    ref: n,
    className: s("px-2 py-1.5 text-sm font-semibold", e && "pl-8", t),
    ...a
  }
));
Ka.displayName = h.Label.displayName;
const Ua = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(h.Separator, { ref: a, className: s("-mx-1 my-1 h-px bg-muted", t), ...e }));
Ua.displayName = h.Separator.displayName;
const qa = ({ className: t, ...e }) => /* @__PURE__ */ o("span", { className: s("ml-auto text-xs tracking-widest opacity-60", t), ...e });
qa.displayName = "DropdownMenuShortcut";
const Wa = z("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), ze = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(we.Root, { ref: a, className: s(Wa(), t), ...e }));
ze.displayName = we.Root.displayName;
const Bs = ft, Ae = r.createContext({}), Fs = ({
  ...t
}) => /* @__PURE__ */ o(Ae.Provider, { value: { name: t.name }, children: /* @__PURE__ */ o(pt, { ...t }) }), re = () => {
  const t = r.useContext(Ae), e = r.useContext(Le), { getFieldState: a, formState: n } = gt(), i = a(t.name, n);
  if (!t)
    throw new Error("useFormField should be used within <FormField>");
  const { id: l } = e;
  return {
    id: l,
    name: t.name,
    formItemId: `${l}-form-item`,
    formDescriptionId: `${l}-form-item-description`,
    formMessageId: `${l}-form-item-message`,
    ...i
  };
}, Le = r.createContext({}), Xa = r.forwardRef(
  ({ className: t, ...e }, a) => {
    const n = r.useId();
    return /* @__PURE__ */ o(Le.Provider, { value: { id: n }, children: /* @__PURE__ */ o("div", { ref: a, className: s("space-y-2", t), ...e }) });
  }
);
Xa.displayName = "FormItem";
const Ya = r.forwardRef(({ className: t, ...e }, a) => {
  const { error: n, formItemId: i } = re();
  return /* @__PURE__ */ o(ze, { ref: a, className: s(n && "text-destructive", t), htmlFor: i, ...e });
});
Ya.displayName = "FormLabel";
const Qa = r.forwardRef(
  ({ ...t }, e) => {
    const { error: a, formItemId: n, formDescriptionId: i, formMessageId: l } = re();
    return /* @__PURE__ */ o(
      L,
      {
        ref: e,
        id: n,
        "aria-describedby": a ? `${i} ${l}` : `${i}`,
        "aria-invalid": !!a,
        ...t
      }
    );
  }
);
Qa.displayName = "FormControl";
const Ja = r.forwardRef(
  ({ className: t, ...e }, a) => {
    const { formDescriptionId: n } = re();
    return /* @__PURE__ */ o("p", { ref: a, id: n, className: s("text-sm text-muted-foreground", t), ...e });
  }
);
Ja.displayName = "FormDescription";
const Za = r.forwardRef(
  ({ className: t, children: e, ...a }, n) => {
    const { error: i, formMessageId: l } = re(), m = i ? String(i == null ? void 0 : i.message) : e;
    return m ? /* @__PURE__ */ o("p", { ref: n, id: l, className: s("text-sm font-medium text-destructive", t), ...a, children: m }) : null;
  }
);
Za.displayName = "FormMessage";
const Gs = ee.Root, Hs = ee.Trigger, eo = r.forwardRef(({ className: t, align: e = "center", sideOffset: a = 4, ...n }, i) => /* @__PURE__ */ o(
  ee.Content,
  {
    ref: i,
    align: e,
    sideOffset: a,
    className: s(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...n
  }
));
eo.displayName = ee.Content.displayName;
const Oe = r.forwardRef(
  ({ className: t, type: e, ...a }, n) => /* @__PURE__ */ o(
    "input",
    {
      type: e,
      className: s(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        t
      ),
      ref: n,
      ...a
    }
  )
);
Oe.displayName = "Input";
const to = r.forwardRef(
  ({ className: t, containerClassName: e, ...a }, n) => /* @__PURE__ */ o(
    bt,
    {
      ref: n,
      containerClassName: s("flex items-center gap-2 has-[:disabled]:opacity-50", e),
      className: s("disabled:cursor-not-allowed", t),
      ...a
    }
  )
);
to.displayName = "InputOTP";
const ao = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o("div", { ref: a, className: s("flex items-center", t), ...e })
);
ao.displayName = "InputOTPGroup";
const oo = r.forwardRef(({ index: t, className: e, ...a }, n) => {
  const i = r.useContext(ht), { char: l, hasFakeCaret: m, isActive: u } = i.slots[t];
  return /* @__PURE__ */ d(
    "div",
    {
      ref: n,
      className: s(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        u && "z-10 ring-2 ring-ring ring-offset-background",
        e
      ),
      ...a,
      children: [
        l,
        m && /* @__PURE__ */ o("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ o("div", { className: "animate-caret-blink h-4 w-px bg-foreground duration-1000" }) })
      ]
    }
  );
});
oo.displayName = "InputOTPSlot";
const ro = r.forwardRef(
  ({ ...t }, e) => /* @__PURE__ */ o("div", { ref: e, role: "separator", ...t, children: /* @__PURE__ */ o(st, {}) })
);
ro.displayName = "InputOTPSeparator";
const Vs = f.Menu, $s = f.Group, Ks = f.Portal, Us = f.Sub, qs = f.RadioGroup, so = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  f.Root,
  {
    ref: a,
    className: s("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", t),
    ...e
  }
));
so.displayName = f.Root.displayName;
const no = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  f.Trigger,
  {
    ref: a,
    className: s(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      t
    ),
    ...e
  }
));
no.displayName = f.Trigger.displayName;
const io = r.forwardRef(({ className: t, inset: e, children: a, ...n }, i) => /* @__PURE__ */ d(
  f.SubTrigger,
  {
    ref: i,
    className: s(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      e && "pl-8",
      t
    ),
    ...n,
    children: [
      a,
      /* @__PURE__ */ o(G, { className: "ml-auto h-4 w-4" })
    ]
  }
));
io.displayName = f.SubTrigger.displayName;
const lo = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  f.SubContent,
  {
    ref: a,
    className: s(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
lo.displayName = f.SubContent.displayName;
const co = r.forwardRef(({ className: t, align: e = "start", alignOffset: a = -4, sideOffset: n = 8, ...i }, l) => /* @__PURE__ */ o(f.Portal, { children: /* @__PURE__ */ o(
  f.Content,
  {
    ref: l,
    align: e,
    alignOffset: a,
    sideOffset: n,
    className: s(
      "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...i
  }
) }));
co.displayName = f.Content.displayName;
const mo = r.forwardRef(({ className: t, inset: e, ...a }, n) => /* @__PURE__ */ o(
  f.Item,
  {
    ref: n,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e && "pl-8",
      t
    ),
    ...a
  }
));
mo.displayName = f.Item.displayName;
const uo = r.forwardRef(({ className: t, children: e, checked: a, ...n }, i) => /* @__PURE__ */ d(
  f.CheckboxItem,
  {
    ref: i,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t
    ),
    checked: a,
    ...n,
    children: [
      /* @__PURE__ */ o("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o(f.ItemIndicator, { children: /* @__PURE__ */ o(W, { className: "h-4 w-4" }) }) }),
      e
    ]
  }
));
uo.displayName = f.CheckboxItem.displayName;
const fo = r.forwardRef(({ className: t, children: e, ...a }, n) => /* @__PURE__ */ d(
  f.RadioItem,
  {
    ref: n,
    className: s(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t
    ),
    ...a,
    children: [
      /* @__PURE__ */ o("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o(f.ItemIndicator, { children: /* @__PURE__ */ o(Z, { className: "h-2 w-2 fill-current" }) }) }),
      e
    ]
  }
));
fo.displayName = f.RadioItem.displayName;
const po = r.forwardRef(({ className: t, inset: e, ...a }, n) => /* @__PURE__ */ o(
  f.Label,
  {
    ref: n,
    className: s("px-2 py-1.5 text-sm font-semibold", e && "pl-8", t),
    ...a
  }
));
po.displayName = f.Label.displayName;
const go = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(f.Separator, { ref: a, className: s("-mx-1 my-1 h-px bg-muted", t), ...e }));
go.displayName = f.Separator.displayName;
const bo = ({ className: t, ...e }) => /* @__PURE__ */ o("span", { className: s("ml-auto text-xs tracking-widest text-muted-foreground", t), ...e });
bo.displayname = "MenubarShortcut";
const ho = r.forwardRef(({ className: t, children: e, ...a }, n) => /* @__PURE__ */ d(
  S.Root,
  {
    ref: n,
    className: s("relative z-10 flex max-w-max flex-1 items-center justify-center", t),
    ...a,
    children: [
      e,
      /* @__PURE__ */ o(je, {})
    ]
  }
));
ho.displayName = S.Root.displayName;
const xo = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  S.List,
  {
    ref: a,
    className: s("group flex flex-1 list-none items-center justify-center space-x-1", t),
    ...e
  }
));
xo.displayName = S.List.displayName;
const Ws = S.Item, vo = z(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), No = r.forwardRef(({ className: t, children: e, ...a }, n) => /* @__PURE__ */ d(
  S.Trigger,
  {
    ref: n,
    className: s(vo(), "group", t),
    ...a,
    children: [
      e,
      " ",
      /* @__PURE__ */ o(
        J,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
No.displayName = S.Trigger.displayName;
const yo = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  S.Content,
  {
    ref: a,
    className: s(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      t
    ),
    ...e
  }
));
yo.displayName = S.Content.displayName;
const Xs = S.Link, je = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o("div", { className: s("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ o(
  S.Viewport,
  {
    className: s(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      t
    ),
    ref: a,
    ...e
  }
) }));
je.displayName = S.Viewport.displayName;
const wo = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  S.Indicator,
  {
    ref: a,
    className: s(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      t
    ),
    ...e,
    children: /* @__PURE__ */ o("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
wo.displayName = S.Indicator.displayName;
const Ro = ({ className: t, ...e }) => /* @__PURE__ */ o(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: s("mx-auto flex w-full justify-center", t),
    ...e
  }
);
Ro.displayName = "Pagination";
const Co = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o("ul", { ref: a, className: s("flex flex-row items-center gap-1", t), ...e })
);
Co.displayName = "PaginationContent";
const So = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o("li", { ref: a, className: s("", t), ...e }));
So.displayName = "PaginationItem";
const he = ({ className: t, isActive: e, size: a = "icon", ...n }) => /* @__PURE__ */ o(
  "a",
  {
    "aria-current": e ? "page" : void 0,
    className: s(
      F({
        variant: e ? "outline" : "ghost",
        size: a
      }),
      t
    ),
    ...n
  }
);
he.displayName = "PaginationLink";
const To = ({ className: t, ...e }) => /* @__PURE__ */ d(he, { "aria-label": "Go to previous page", size: "default", className: s("gap-1 pl-2.5", t), ...e, children: [
  /* @__PURE__ */ o(ye, { className: "h-4 w-4" }),
  /* @__PURE__ */ o("span", { children: "Previous" })
] });
To.displayName = "PaginationPrevious";
const ko = ({ className: t, ...e }) => /* @__PURE__ */ d(he, { "aria-label": "Go to next page", size: "default", className: s("gap-1 pr-2.5", t), ...e, children: [
  /* @__PURE__ */ o("span", { children: "Next" }),
  /* @__PURE__ */ o(G, { className: "h-4 w-4" })
] });
ko.displayName = "PaginationNext";
const Io = ({ className: t, ...e }) => /* @__PURE__ */ d("span", { "aria-hidden": !0, className: s("flex h-9 w-9 items-center justify-center", t), ...e, children: [
  /* @__PURE__ */ o(Ne, { className: "h-4 w-4" }),
  /* @__PURE__ */ o("span", { className: "sr-only", children: "More pages" })
] });
Io.displayName = "PaginationEllipsis";
const Ys = U.Root, Qs = U.Trigger, Mo = r.forwardRef(({ className: t, align: e = "center", sideOffset: a = 4, ...n }, i) => /* @__PURE__ */ o(U.Portal, { children: /* @__PURE__ */ o(
  U.Content,
  {
    ref: i,
    align: e,
    sideOffset: a,
    className: s(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...n
  }
) }));
Mo.displayName = U.Content.displayName;
const Po = r.forwardRef(({ className: t, value: e, ...a }, n) => /* @__PURE__ */ o(
  ce.Root,
  {
    ref: n,
    className: s("relative h-4 w-full overflow-hidden rounded-full bg-secondary", t),
    ...a,
    children: /* @__PURE__ */ o(
      ce.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (e || 0)}%)` }
      }
    )
  }
));
Po.displayName = ce.Root.displayName;
const Do = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(q.Root, { className: s("grid gap-2", t), ...e, ref: a }));
Do.displayName = q.Root.displayName;
const _o = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  q.Item,
  {
    ref: a,
    className: s(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      t
    ),
    ...e,
    children: /* @__PURE__ */ o(q.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ o(Z, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
_o.displayName = q.Item.displayName;
const Js = ({ className: t, ...e }) => /* @__PURE__ */ o(
  be.PanelGroup,
  {
    className: s("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", t),
    ...e
  }
), Zs = be.Panel, en = ({
  withHandle: t,
  className: e,
  ...a
}) => /* @__PURE__ */ o(
  be.PanelResizeHandle,
  {
    className: s(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      e
    ),
    ...a,
    children: t && /* @__PURE__ */ o("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ o(nt, { className: "h-2.5 w-2.5" }) })
  }
), zo = r.forwardRef(({ className: t, children: e, ...a }, n) => /* @__PURE__ */ d(j.Root, { ref: n, className: s("relative overflow-hidden", t), ...a, children: [
  /* @__PURE__ */ o(j.Viewport, { className: "h-full w-full rounded-[inherit]", children: e }),
  /* @__PURE__ */ o(Ee, {}),
  /* @__PURE__ */ o(j.Corner, {})
] }));
zo.displayName = j.Root.displayName;
const Ee = r.forwardRef(({ className: t, orientation: e = "vertical", ...a }, n) => /* @__PURE__ */ o(
  j.ScrollAreaScrollbar,
  {
    ref: n,
    orientation: e,
    className: s(
      "flex touch-none select-none transition-colors",
      e === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      e === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      t
    ),
    ...a,
    children: /* @__PURE__ */ o(j.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Ee.displayName = j.ScrollAreaScrollbar.displayName;
const tn = v.Root, an = v.Group, on = v.Value, Ao = r.forwardRef(({ className: t, children: e, ...a }, n) => /* @__PURE__ */ d(
  v.Trigger,
  {
    ref: n,
    className: s(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      t
    ),
    ...a,
    children: [
      e,
      /* @__PURE__ */ o(v.Icon, { asChild: !0, children: /* @__PURE__ */ o(J, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Ao.displayName = v.Trigger.displayName;
const Be = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  v.ScrollUpButton,
  {
    ref: a,
    className: s("flex cursor-default items-center justify-center py-1", t),
    ...e,
    children: /* @__PURE__ */ o(it, { className: "h-4 w-4" })
  }
));
Be.displayName = v.ScrollUpButton.displayName;
const Fe = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  v.ScrollDownButton,
  {
    ref: a,
    className: s("flex cursor-default items-center justify-center py-1", t),
    ...e,
    children: /* @__PURE__ */ o(J, { className: "h-4 w-4" })
  }
));
Fe.displayName = v.ScrollDownButton.displayName;
const Lo = r.forwardRef(({ className: t, children: e, position: a = "popper", ...n }, i) => /* @__PURE__ */ o(v.Portal, { children: /* @__PURE__ */ d(
  v.Content,
  {
    ref: i,
    className: s(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      t
    ),
    position: a,
    ...n,
    children: [
      /* @__PURE__ */ o(Be, {}),
      /* @__PURE__ */ o(
        v.Viewport,
        {
          className: s(
            "p-1",
            a === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: e
        }
      ),
      /* @__PURE__ */ o(Fe, {})
    ]
  }
) }));
Lo.displayName = v.Content.displayName;
const Oo = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(v.Label, { ref: a, className: s("py-1.5 pl-8 pr-2 text-sm font-semibold", t), ...e }));
Oo.displayName = v.Label.displayName;
const jo = r.forwardRef(({ className: t, children: e, ...a }, n) => /* @__PURE__ */ d(
  v.Item,
  {
    ref: n,
    className: s(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      t
    ),
    ...a,
    children: [
      /* @__PURE__ */ o("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o(v.ItemIndicator, { children: /* @__PURE__ */ o(W, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ o(v.ItemText, { children: e })
    ]
  }
));
jo.displayName = v.Item.displayName;
const Eo = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(v.Separator, { ref: a, className: s("-mx-1 my-1 h-px bg-muted", t), ...e }));
Eo.displayName = v.Separator.displayName;
const Ge = r.forwardRef(({ className: t, orientation: e = "horizontal", decorative: a = !0, ...n }, i) => /* @__PURE__ */ o(
  Re.Root,
  {
    ref: i,
    decorative: a,
    orientation: e,
    className: s("shrink-0 bg-border", e === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", t),
    ...n
  }
));
Ge.displayName = Re.Root.displayName;
const Bo = p.Root, rn = p.Trigger, sn = p.Close, Fo = p.Portal, He = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  p.Overlay,
  {
    className: s(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e,
    ref: a
  }
));
He.displayName = p.Overlay.displayName;
const Go = z(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), Ve = r.forwardRef(
  ({ side: t = "right", className: e, children: a, ...n }, i) => /* @__PURE__ */ d(Fo, { children: [
    /* @__PURE__ */ o(He, {}),
    /* @__PURE__ */ d(p.Content, { ref: i, className: s(Go({ side: t }), e), ...n, children: [
      a,
      /* @__PURE__ */ d(p.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
        /* @__PURE__ */ o(fe, { className: "h-4 w-4" }),
        /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
      ] })
    ] })
  ] })
);
Ve.displayName = p.Content.displayName;
const Ho = ({ className: t, ...e }) => /* @__PURE__ */ o("div", { className: s("flex flex-col space-y-2 text-center sm:text-left", t), ...e });
Ho.displayName = "SheetHeader";
const Vo = ({ className: t, ...e }) => /* @__PURE__ */ o("div", { className: s("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t), ...e });
Vo.displayName = "SheetFooter";
const $o = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(p.Title, { ref: a, className: s("text-lg font-semibold text-foreground", t), ...e }));
$o.displayName = p.Title.displayName;
const Ko = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(p.Description, { ref: a, className: s("text-sm text-muted-foreground", t), ...e }));
Ko.displayName = p.Description.displayName;
const ne = 768;
function Uo() {
  const [t, e] = r.useState(void 0);
  return r.useEffect(() => {
    const a = window.matchMedia(`(max-width: ${ne - 1}px)`), n = () => {
      e(window.innerWidth < ne);
    };
    return a.addEventListener("change", n), e(window.innerWidth < ne), () => a.removeEventListener("change", n);
  }, []), !!t;
}
function xe({ className: t, ...e }) {
  return /* @__PURE__ */ o("div", { className: s("animate-pulse rounded-md bg-muted", t), ...e });
}
const qo = X.Provider, Wo = X.Root, Xo = X.Trigger, $e = r.forwardRef(({ className: t, sideOffset: e = 4, ...a }, n) => /* @__PURE__ */ o(
  X.Content,
  {
    ref: n,
    sideOffset: e,
    className: s(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...a
  }
));
$e.displayName = X.Content.displayName;
const Yo = "sidebar:state", Qo = 60 * 60 * 24 * 7, Jo = "16rem", Zo = "18rem", er = "3rem", tr = "b", Ke = r.createContext(null);
function se() {
  const t = r.useContext(Ke);
  if (!t)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return t;
}
const ar = r.forwardRef(({ defaultOpen: t = !0, open: e, onOpenChange: a, className: n, style: i, children: l, ...m }, u) => {
  const N = Uo(), [c, k] = r.useState(!1), [A, O] = r.useState(t), _ = e ?? A, y = r.useCallback(
    (x) => {
      const R = typeof x == "function" ? x(_) : x;
      a ? a(R) : O(R), document.cookie = `${Yo}=${R}; path=/; max-age=${Qo}`;
    },
    [a, _]
  ), I = r.useCallback(() => N ? k((x) => !x) : y((x) => !x), [N, y, k]);
  r.useEffect(() => {
    const x = (R) => {
      R.key === tr && (R.metaKey || R.ctrlKey) && (R.preventDefault(), I());
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [I]);
  const M = _ ? "expanded" : "collapsed", g = r.useMemo(
    () => ({
      state: M,
      open: _,
      setOpen: y,
      isMobile: N,
      openMobile: c,
      setOpenMobile: k,
      toggleSidebar: I
    }),
    [M, _, y, N, c, k, I]
  );
  return /* @__PURE__ */ o(Ke.Provider, { value: g, children: /* @__PURE__ */ o(qo, { delayDuration: 0, children: /* @__PURE__ */ o(
    "div",
    {
      style: {
        "--sidebar-width": Jo,
        "--sidebar-width-icon": er,
        ...i
      },
      className: s("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", n),
      ref: u,
      ...m,
      children: l
    }
  ) }) });
});
ar.displayName = "SidebarProvider";
const or = r.forwardRef(({ side: t = "left", variant: e = "sidebar", collapsible: a = "offcanvas", className: n, children: i, ...l }, m) => {
  const { isMobile: u, state: N, openMobile: c, setOpenMobile: k } = se();
  return a === "none" ? /* @__PURE__ */ o(
    "div",
    {
      className: s("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", n),
      ref: m,
      ...l,
      children: i
    }
  ) : u ? /* @__PURE__ */ o(Bo, { open: c, onOpenChange: k, ...l, children: /* @__PURE__ */ o(
    Ve,
    {
      "data-sidebar": "sidebar",
      "data-mobile": "true",
      className: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
      style: {
        "--sidebar-width": Zo
      },
      side: t,
      children: /* @__PURE__ */ o("div", { className: "flex h-full w-full flex-col", children: i })
    }
  ) }) : /* @__PURE__ */ d(
    "div",
    {
      ref: m,
      className: "group peer hidden text-sidebar-foreground md:block",
      "data-state": N,
      "data-collapsible": N === "collapsed" ? a : "",
      "data-variant": e,
      "data-side": t,
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: s(
              "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              e === "floating" || e === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
            )
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: s(
              "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
              t === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              e === "floating" || e === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
              n
            ),
            ...l,
            children: /* @__PURE__ */ o(
              "div",
              {
                "data-sidebar": "sidebar",
                className: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                children: i
              }
            )
          }
        )
      ]
    }
  );
});
or.displayName = "Sidebar";
const rr = r.forwardRef(
  ({ className: t, onClick: e, ...a }, n) => {
    const { toggleSidebar: i } = se();
    return /* @__PURE__ */ d(
      ae,
      {
        ref: n,
        "data-sidebar": "trigger",
        variant: "ghost",
        size: "icon",
        className: s("h-7 w-7", t),
        onClick: (l) => {
          e == null || e(l), i();
        },
        ...a,
        children: [
          /* @__PURE__ */ o(dt, {}),
          /* @__PURE__ */ o("span", { className: "sr-only", children: "Toggle Sidebar" })
        ]
      }
    );
  }
);
rr.displayName = "SidebarTrigger";
const sr = r.forwardRef(
  ({ className: t, ...e }, a) => {
    const { toggleSidebar: n } = se();
    return /* @__PURE__ */ o(
      "button",
      {
        ref: a,
        "data-sidebar": "rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: n,
        title: "Toggle Sidebar",
        className: s(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          t
        ),
        ...e
      }
    );
  }
);
sr.displayName = "SidebarRail";
const nr = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  "main",
  {
    ref: a,
    className: s(
      "relative flex min-h-svh flex-1 flex-col bg-background",
      "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
      t
    ),
    ...e
  }
));
nr.displayName = "SidebarInset";
const ir = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o(
    Oe,
    {
      ref: a,
      "data-sidebar": "input",
      className: s(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        t
      ),
      ...e
    }
  )
);
ir.displayName = "SidebarInput";
const dr = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o("div", { ref: a, "data-sidebar": "header", className: s("flex flex-col gap-2 p-2", t), ...e }));
dr.displayName = "SidebarHeader";
const lr = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o("div", { ref: a, "data-sidebar": "footer", className: s("flex flex-col gap-2 p-2", t), ...e }));
lr.displayName = "SidebarFooter";
const cr = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o(
    Ge,
    {
      ref: a,
      "data-sidebar": "separator",
      className: s("mx-2 w-auto bg-sidebar-border", t),
      ...e
    }
  )
);
cr.displayName = "SidebarSeparator";
const mr = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  "div",
  {
    ref: a,
    "data-sidebar": "content",
    className: s(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      t
    ),
    ...e
  }
));
mr.displayName = "SidebarContent";
const ur = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  "div",
  {
    ref: a,
    "data-sidebar": "group",
    className: s("relative flex w-full min-w-0 flex-col p-2", t),
    ...e
  }
));
ur.displayName = "SidebarGroup";
const fr = r.forwardRef(
  ({ className: t, asChild: e = !1, ...a }, n) => /* @__PURE__ */ o(
    e ? L : "div",
    {
      ref: n,
      "data-sidebar": "group-label",
      className: s(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        t
      ),
      ...a
    }
  )
);
fr.displayName = "SidebarGroupLabel";
const pr = r.forwardRef(
  ({ className: t, asChild: e = !1, ...a }, n) => /* @__PURE__ */ o(
    e ? L : "button",
    {
      ref: n,
      "data-sidebar": "group-action",
      className: s(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        t
      ),
      ...a
    }
  )
);
pr.displayName = "SidebarGroupAction";
const gr = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o("div", { ref: a, "data-sidebar": "group-content", className: s("w-full text-sm", t), ...e })
);
gr.displayName = "SidebarGroupContent";
const br = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o("ul", { ref: a, "data-sidebar": "menu", className: s("flex w-full min-w-0 flex-col gap-1", t), ...e }));
br.displayName = "SidebarMenu";
const hr = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o("li", { ref: a, "data-sidebar": "menu-item", className: s("group/menu-item relative", t), ...e }));
hr.displayName = "SidebarMenuItem";
const xr = z(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), vr = r.forwardRef(({ asChild: t = !1, isActive: e = !1, variant: a = "default", size: n = "default", tooltip: i, className: l, ...m }, u) => {
  const N = t ? L : "button", { isMobile: c, state: k } = se(), A = /* @__PURE__ */ o(
    N,
    {
      ref: u,
      "data-sidebar": "menu-button",
      "data-size": n,
      "data-active": e,
      className: s(xr({ variant: a, size: n }), l),
      ...m
    }
  );
  return i ? (typeof i == "string" && (i = {
    children: i
  }), /* @__PURE__ */ d(Wo, { children: [
    /* @__PURE__ */ o(Xo, { asChild: !0, children: A }),
    /* @__PURE__ */ o($e, { side: "right", align: "center", hidden: k !== "collapsed" || c, ...i })
  ] })) : A;
});
vr.displayName = "SidebarMenuButton";
const Nr = r.forwardRef(({ className: t, asChild: e = !1, showOnHover: a = !1, ...n }, i) => /* @__PURE__ */ o(
  e ? L : "button",
  {
    ref: i,
    "data-sidebar": "menu-action",
    className: s(
      "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      // Increases the hit area of the button on mobile.
      "after:absolute after:-inset-2 after:md:hidden",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      a && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
      t
    ),
    ...n
  }
));
Nr.displayName = "SidebarMenuAction";
const yr = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o(
    "div",
    {
      ref: a,
      "data-sidebar": "menu-badge",
      className: s(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        t
      ),
      ...e
    }
  )
);
yr.displayName = "SidebarMenuBadge";
const wr = r.forwardRef(({ className: t, showIcon: e = !1, ...a }, n) => {
  const i = r.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return /* @__PURE__ */ d(
    "div",
    {
      ref: n,
      "data-sidebar": "menu-skeleton",
      className: s("flex h-8 items-center gap-2 rounded-md px-2", t),
      ...a,
      children: [
        e && /* @__PURE__ */ o(xe, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ o(
          xe,
          {
            className: "h-4 max-w-[--skeleton-width] flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": i
            }
          }
        )
      ]
    }
  );
});
wr.displayName = "SidebarMenuSkeleton";
const Rr = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o(
    "ul",
    {
      ref: a,
      "data-sidebar": "menu-sub",
      className: s(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        t
      ),
      ...e
    }
  )
);
Rr.displayName = "SidebarMenuSub";
const Cr = r.forwardRef(({ ...t }, e) => /* @__PURE__ */ o("li", { ref: e, ...t }));
Cr.displayName = "SidebarMenuSubItem";
const Sr = r.forwardRef(({ asChild: t = !1, size: e = "md", isActive: a, className: n, ...i }, l) => /* @__PURE__ */ o(
  t ? L : "a",
  {
    ref: l,
    "data-sidebar": "menu-sub-button",
    "data-size": e,
    "data-active": a,
    className: s(
      "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
      "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
      e === "sm" && "text-xs",
      e === "md" && "text-sm",
      "group-data-[collapsible=icon]:hidden",
      n
    ),
    ...i
  }
));
Sr.displayName = "SidebarMenuSubButton";
const Tr = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ d(
  $.Root,
  {
    ref: a,
    className: s("relative flex w-full touch-none select-none items-center", t),
    ...e,
    children: [
      /* @__PURE__ */ o($.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ o($.Range, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ o($.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Tr.displayName = $.Root.displayName;
const nn = ({ ...t }) => {
  const { theme: e = "system" } = xt();
  return /* @__PURE__ */ o(
    vt,
    {
      theme: e,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...t
    }
  );
}, kr = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  me.Root,
  {
    className: s(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      t
    ),
    ...e,
    ref: a,
    children: /* @__PURE__ */ o(
      me.Thumb,
      {
        className: s(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
kr.displayName = me.Root.displayName;
const Ir = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ o("table", { ref: a, className: s("w-full caption-bottom text-sm", t), ...e }) })
);
Ir.displayName = "Table";
const Mr = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o("thead", { ref: a, className: s("[&_tr]:border-b", t), ...e })
);
Mr.displayName = "TableHeader";
const Pr = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o("tbody", { ref: a, className: s("[&_tr:last-child]:border-0", t), ...e })
);
Pr.displayName = "TableBody";
const Dr = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o("tfoot", { ref: a, className: s("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", t), ...e })
);
Dr.displayName = "TableFooter";
const _r = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o(
    "tr",
    {
      ref: a,
      className: s("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", t),
      ...e
    }
  )
);
_r.displayName = "TableRow";
const zr = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o(
    "th",
    {
      ref: a,
      className: s(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        t
      ),
      ...e
    }
  )
);
zr.displayName = "TableHead";
const Ar = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o("td", { ref: a, className: s("p-4 align-middle [&:has([role=checkbox])]:pr-0", t), ...e })
);
Ar.displayName = "TableCell";
const Lr = r.forwardRef(
  ({ className: t, ...e }, a) => /* @__PURE__ */ o("caption", { ref: a, className: s("mt-4 text-sm text-muted-foreground", t), ...e })
);
Lr.displayName = "TableCaption";
const dn = B.Root, Or = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  B.List,
  {
    ref: a,
    className: s(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      t
    ),
    ...e
  }
));
Or.displayName = B.List.displayName;
const jr = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  B.Trigger,
  {
    ref: a,
    className: s(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      t
    ),
    ...e
  }
));
jr.displayName = B.Trigger.displayName;
const Er = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  B.Content,
  {
    ref: a,
    className: s(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...e
  }
));
Er.displayName = B.Content.displayName;
const Br = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  "textarea",
  {
    className: s(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      t
    ),
    ref: a,
    ...e
  }
));
Br.displayName = "Textarea";
const Fr = T.Provider, Ue = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  T.Viewport,
  {
    ref: a,
    className: s(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      t
    ),
    ...e
  }
));
Ue.displayName = T.Viewport.displayName;
const Gr = z(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), qe = r.forwardRef(({ className: t, variant: e, ...a }, n) => /* @__PURE__ */ o(T.Root, { ref: n, className: s(Gr({ variant: e }), t), ...a }));
qe.displayName = T.Root.displayName;
const Hr = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  T.Action,
  {
    ref: a,
    className: s(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      t
    ),
    ...e
  }
));
Hr.displayName = T.Action.displayName;
const We = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(
  T.Close,
  {
    ref: a,
    className: s(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      t
    ),
    "toast-close": "",
    ...e,
    children: /* @__PURE__ */ o(fe, { className: "h-4 w-4" })
  }
));
We.displayName = T.Close.displayName;
const Xe = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(T.Title, { ref: a, className: s("text-sm font-semibold", t), ...e }));
Xe.displayName = T.Title.displayName;
const Ye = r.forwardRef(({ className: t, ...e }, a) => /* @__PURE__ */ o(T.Description, { ref: a, className: s("text-sm opacity-90", t), ...e }));
Ye.displayName = T.Description.displayName;
const Vr = 1, $r = 1e6;
let ie = 0;
function Kr() {
  return ie = (ie + 1) % Number.MAX_SAFE_INTEGER, ie.toString();
}
const de = /* @__PURE__ */ new Map(), ve = (t) => {
  if (de.has(t))
    return;
  const e = setTimeout(() => {
    de.delete(t), K({
      type: "REMOVE_TOAST",
      toastId: t
    });
  }, $r);
  de.set(t, e);
}, Ur = (t, e) => {
  switch (e.type) {
    case "ADD_TOAST":
      return {
        ...t,
        toasts: [e.toast, ...t.toasts].slice(0, Vr)
      };
    case "UPDATE_TOAST":
      return {
        ...t,
        toasts: t.toasts.map((a) => a.id === e.toast.id ? { ...a, ...e.toast } : a)
      };
    case "DISMISS_TOAST": {
      const { toastId: a } = e;
      return a ? ve(a) : t.toasts.forEach((n) => {
        ve(n.id);
      }), {
        ...t,
        toasts: t.toasts.map(
          (n) => n.id === a || a === void 0 ? {
            ...n,
            open: !1
          } : n
        )
      };
    }
    case "REMOVE_TOAST":
      return e.toastId === void 0 ? {
        ...t,
        toasts: []
      } : {
        ...t,
        toasts: t.toasts.filter((a) => a.id !== e.toastId)
      };
  }
}, Y = [];
let Q = { toasts: [] };
function K(t) {
  Q = Ur(Q, t), Y.forEach((e) => {
    e(Q);
  });
}
function qr({ ...t }) {
  const e = Kr(), a = (i) => K({
    type: "UPDATE_TOAST",
    toast: { ...i, id: e }
  }), n = () => K({ type: "DISMISS_TOAST", toastId: e });
  return K({
    type: "ADD_TOAST",
    toast: {
      ...t,
      id: e,
      open: !0,
      onOpenChange: (i) => {
        i || n();
      }
    }
  }), {
    id: e,
    dismiss: n,
    update: a
  };
}
function Wr() {
  const [t, e] = r.useState(Q);
  return r.useEffect(() => (Y.push(e), () => {
    const a = Y.indexOf(e);
    a > -1 && Y.splice(a, 1);
  }), [t]), {
    ...t,
    toast: qr,
    dismiss: (a) => K({ type: "DISMISS_TOAST", toastId: a })
  };
}
function ln() {
  const { toasts: t } = Wr();
  return /* @__PURE__ */ d(Fr, { children: [
    t.map(function({ id: e, title: a, description: n, action: i, ...l }) {
      return /* @__PURE__ */ d(qe, { ...l, children: [
        /* @__PURE__ */ d("div", { className: "grid gap-1", children: [
          a && /* @__PURE__ */ o(Xe, { children: a }),
          n && /* @__PURE__ */ o(Ye, { children: n })
        ] }),
        i,
        /* @__PURE__ */ o(We, {})
      ] }, e);
    }),
    /* @__PURE__ */ o(Ue, {})
  ] });
}
const Qe = z(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Xr = r.forwardRef(({ className: t, variant: e, size: a, ...n }, i) => /* @__PURE__ */ o(Ce.Root, { ref: i, className: s(Qe({ variant: e, size: a, className: t })), ...n }));
Xr.displayName = Ce.Root.displayName;
const Je = r.createContext({
  size: "default",
  variant: "default"
}), Yr = r.forwardRef(({ className: t, variant: e, size: a, children: n, ...i }, l) => /* @__PURE__ */ o(te.Root, { ref: l, className: s("flex items-center justify-center gap-1", t), ...i, children: /* @__PURE__ */ o(Je.Provider, { value: { variant: e, size: a }, children: n }) }));
Yr.displayName = te.Root.displayName;
const Qr = r.forwardRef(({ className: t, children: e, variant: a, size: n, ...i }, l) => {
  const m = r.useContext(Je);
  return /* @__PURE__ */ o(
    te.Item,
    {
      ref: l,
      className: s(
        Qe({
          variant: m.variant || a,
          size: m.size || n
        }),
        t
      ),
      ...i,
      children: e
    }
  );
});
Qr.displayName = te.Item.displayName;
const cn = ({ header: t, footer: e, className: a, children: n }) => /* @__PURE__ */ d("div", { className: s("min-h-screen bg-background", a), children: [
  t,
  n,
  e
] }), mn = () => /* @__PURE__ */ o("header", { className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50", children: /* @__PURE__ */ d("div", { className: "container mx-auto px-4 h-16 flex items-center justify-between", children: [
  /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ o("div", { className: "w-10 h-10 rounded-lg bg-primary flex items-center justify-center", children: /* @__PURE__ */ o(lt, { className: "h-6 w-6 text-primary-foreground" }) }),
    /* @__PURE__ */ d("span", { className: "text-xl font-bold text-foreground tracking-tight", children: [
      "PROCESS",
      /* @__PURE__ */ o("span", { className: "text-primary", children: "LAB" })
    ] })
  ] }),
  /* @__PURE__ */ d("nav", { className: "hidden md:flex items-center gap-6", children: [
    /* @__PURE__ */ o("a", { href: "#features", className: "text-sm text-muted-foreground hover:text-foreground transition-colors", children: "Recursos" }),
    /* @__PURE__ */ o("a", { href: "#about", className: "text-sm text-muted-foreground hover:text-foreground transition-colors", children: "Sobre" }),
    /* @__PURE__ */ o("a", { href: "#contact", className: "text-sm text-muted-foreground hover:text-foreground transition-colors", children: "Contato" })
  ] })
] }) });
export {
  us as Accordion,
  wt as AccordionContent,
  Nt as AccordionItem,
  yt as AccordionTrigger,
  Ct as Alert,
  Tt as AlertDescription,
  fs as AlertDialog,
  zt as AlertDialogAction,
  At as AlertDialogCancel,
  It as AlertDialogContent,
  _t as AlertDialogDescription,
  Pt as AlertDialogFooter,
  Mt as AlertDialogHeader,
  Se as AlertDialogOverlay,
  kt as AlertDialogPortal,
  Dt as AlertDialogTitle,
  ps as AlertDialogTrigger,
  St as AlertTitle,
  cn as AppShell,
  gs as AspectRatio,
  Lt as Avatar,
  jt as AvatarFallback,
  Ot as AvatarImage,
  bs as Badge,
  Bt as Breadcrumb,
  Kt as BreadcrumbEllipsis,
  Gt as BreadcrumbItem,
  Ht as BreadcrumbLink,
  Ft as BreadcrumbList,
  Vt as BreadcrumbPage,
  $t as BreadcrumbSeparator,
  ae as Button,
  Ut as Calendar,
  qt as Card,
  Qt as CardContent,
  Yt as CardDescription,
  Jt as CardFooter,
  Wt as CardHeader,
  Xt as CardTitle,
  Zt as Carousel,
  ea as CarouselContent,
  ta as CarouselItem,
  oa as CarouselNext,
  aa as CarouselPrevious,
  sa as ChartContainer,
  xs as ChartLegend,
  da as ChartLegendContent,
  na as ChartStyle,
  hs as ChartTooltip,
  ia as ChartTooltipContent,
  la as Checkbox,
  vs as Collapsible,
  ys as CollapsibleContent,
  Ns as CollapsibleTrigger,
  De as Command,
  Cs as CommandDialog,
  xa as CommandEmpty,
  va as CommandGroup,
  ba as CommandInput,
  ya as CommandItem,
  ha as CommandList,
  Na as CommandSeparator,
  wa as CommandShortcut,
  Ss as ContextMenu,
  ka as ContextMenuCheckboxItem,
  Sa as ContextMenuContent,
  ks as ContextMenuGroup,
  Ta as ContextMenuItem,
  Ma as ContextMenuLabel,
  Is as ContextMenuPortal,
  Ps as ContextMenuRadioGroup,
  Ia as ContextMenuRadioItem,
  Pa as ContextMenuSeparator,
  Da as ContextMenuShortcut,
  Ms as ContextMenuSub,
  Ca as ContextMenuSubContent,
  Ra as ContextMenuSubTrigger,
  Ts as ContextMenuTrigger,
  ca as Dialog,
  Rs as DialogClose,
  Pe as DialogContent,
  ga as DialogDescription,
  fa as DialogFooter,
  ua as DialogHeader,
  Me as DialogOverlay,
  ma as DialogPortal,
  pa as DialogTitle,
  ws as DialogTrigger,
  _a as Drawer,
  _s as DrawerClose,
  Aa as DrawerContent,
  Ea as DrawerDescription,
  Oa as DrawerFooter,
  La as DrawerHeader,
  _e as DrawerOverlay,
  za as DrawerPortal,
  ja as DrawerTitle,
  Ds as DrawerTrigger,
  zs as DropdownMenu,
  Va as DropdownMenuCheckboxItem,
  Ga as DropdownMenuContent,
  Ls as DropdownMenuGroup,
  Ha as DropdownMenuItem,
  Ka as DropdownMenuLabel,
  Os as DropdownMenuPortal,
  Es as DropdownMenuRadioGroup,
  $a as DropdownMenuRadioItem,
  Ua as DropdownMenuSeparator,
  qa as DropdownMenuShortcut,
  js as DropdownMenuSub,
  Fa as DropdownMenuSubContent,
  Ba as DropdownMenuSubTrigger,
  As as DropdownMenuTrigger,
  Bs as Form,
  Qa as FormControl,
  Ja as FormDescription,
  Fs as FormField,
  Xa as FormItem,
  Ya as FormLabel,
  Za as FormMessage,
  Gs as HoverCard,
  eo as HoverCardContent,
  Hs as HoverCardTrigger,
  Oe as Input,
  to as InputOTP,
  ao as InputOTPGroup,
  ro as InputOTPSeparator,
  oo as InputOTPSlot,
  ze as Label,
  so as Menubar,
  uo as MenubarCheckboxItem,
  co as MenubarContent,
  $s as MenubarGroup,
  mo as MenubarItem,
  po as MenubarLabel,
  Vs as MenubarMenu,
  Ks as MenubarPortal,
  qs as MenubarRadioGroup,
  fo as MenubarRadioItem,
  go as MenubarSeparator,
  bo as MenubarShortcut,
  Us as MenubarSub,
  lo as MenubarSubContent,
  io as MenubarSubTrigger,
  no as MenubarTrigger,
  ho as NavigationMenu,
  yo as NavigationMenuContent,
  wo as NavigationMenuIndicator,
  Ws as NavigationMenuItem,
  Xs as NavigationMenuLink,
  xo as NavigationMenuList,
  No as NavigationMenuTrigger,
  je as NavigationMenuViewport,
  Ro as Pagination,
  Co as PaginationContent,
  Io as PaginationEllipsis,
  So as PaginationItem,
  he as PaginationLink,
  ko as PaginationNext,
  To as PaginationPrevious,
  Ys as Popover,
  Mo as PopoverContent,
  Qs as PopoverTrigger,
  Po as Progress,
  Do as RadioGroup,
  _o as RadioGroupItem,
  en as ResizableHandle,
  Zs as ResizablePanel,
  Js as ResizablePanelGroup,
  zo as ScrollArea,
  Ee as ScrollBar,
  tn as Select,
  Lo as SelectContent,
  an as SelectGroup,
  jo as SelectItem,
  Oo as SelectLabel,
  Fe as SelectScrollDownButton,
  Be as SelectScrollUpButton,
  Eo as SelectSeparator,
  Ao as SelectTrigger,
  on as SelectValue,
  Ge as Separator,
  Bo as Sheet,
  sn as SheetClose,
  Ve as SheetContent,
  Ko as SheetDescription,
  Vo as SheetFooter,
  Ho as SheetHeader,
  He as SheetOverlay,
  Fo as SheetPortal,
  $o as SheetTitle,
  rn as SheetTrigger,
  or as Sidebar,
  mr as SidebarContent,
  lr as SidebarFooter,
  ur as SidebarGroup,
  pr as SidebarGroupAction,
  gr as SidebarGroupContent,
  fr as SidebarGroupLabel,
  dr as SidebarHeader,
  ir as SidebarInput,
  nr as SidebarInset,
  br as SidebarMenu,
  Nr as SidebarMenuAction,
  yr as SidebarMenuBadge,
  vr as SidebarMenuButton,
  hr as SidebarMenuItem,
  wr as SidebarMenuSkeleton,
  Rr as SidebarMenuSub,
  Sr as SidebarMenuSubButton,
  Cr as SidebarMenuSubItem,
  ar as SidebarProvider,
  sr as SidebarRail,
  cr as SidebarSeparator,
  rr as SidebarTrigger,
  xe as Skeleton,
  Tr as Slider,
  nn as Sonner,
  kr as Switch,
  Ir as Table,
  Pr as TableBody,
  Lr as TableCaption,
  Ar as TableCell,
  Dr as TableFooter,
  zr as TableHead,
  Mr as TableHeader,
  _r as TableRow,
  dn as Tabs,
  Er as TabsContent,
  Or as TabsList,
  jr as TabsTrigger,
  Br as Textarea,
  qe as Toast,
  Hr as ToastAction,
  We as ToastClose,
  Ye as ToastDescription,
  Fr as ToastProvider,
  Xe as ToastTitle,
  Ue as ToastViewport,
  ln as Toaster,
  Xr as Toggle,
  Yr as ToggleGroup,
  Qr as ToggleGroupItem,
  Wo as Tooltip,
  $e as TooltipContent,
  qo as TooltipProvider,
  Xo as TooltipTrigger,
  mn as Topbar,
  Et as badgeVariants,
  F as buttonVariants,
  s as cn,
  vo as navigationMenuTriggerStyle,
  Ur as reducer,
  pn as sonnerToast,
  qr as toast,
  Qe as toggleVariants,
  re as useFormField,
  Uo as useIsMobile,
  se as useSidebar,
  Wr as useToast
};
