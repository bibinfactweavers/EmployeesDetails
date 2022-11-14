// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3UyqH456Q9795LJ8TKuZRx
// Component: lxUTBjvCVD
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_employee_management.module.css"; // plasmic-import: 3UyqH456Q9795LJ8TKuZRx/projectcss
import sty from "./PlasmicComponent.module.css"; // plasmic-import: lxUTBjvCVD/css

export const PlasmicComponent__VariantProps = new Array();

export const PlasmicComponent__ArgProps = new Array();

function PlasmicComponent__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    />
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicComponent__ArgProps,
          internalVariantPropNames: PlasmicComponent__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicComponent";
  } else {
    func.displayName = `PlasmicComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicComponent = Object.assign(
  // Top-level PlasmicComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicComponent
    internalVariantProps: PlasmicComponent__VariantProps,
    internalArgProps: PlasmicComponent__ArgProps
  }
);

export default PlasmicComponent;
/* prettier-ignore-end */
