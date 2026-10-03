import React, { useMemo } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  MarkerType,
  Handle,
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css';

/**
 * ReactFlowDiagram
 * ------------------------------------------------------------------
 * Interactive architecture diagram — draggable, pan/zoom, animated
 * edges. Styled to match the portfolio's warm-paper palette so it
 * doesn't feel like a foreign library dropped into the page.
 *
 * Two custom node types:
 *   - "box": single service/component box with icon + label + subtitle
 *   - "group": labeled container that wraps a set of boxes (Akamai,
 *     Zscaler, AWS account, etc.) — non-interactive, purely visual.
 *
 * Props:
 *   nodes: ReactFlow node array ({ id, type, data, position })
 *   edges: ReactFlow edge array ({ id, source, target, label?, animated? })
 *   height: canvas height in px (default 620)
 */

const ACCENT_STYLES = {
  teal: {
    border: '#0d9488',
    bg: 'linear-gradient(180deg, #ffffff 0%, #ecfdf5 100%)',
    dot: '#0d9488',
    text: '#0f766e',
  },
  amber: {
    border: '#f59e0b',
    bg: 'linear-gradient(180deg, #ffffff 0%, #fffbeb 100%)',
    dot: '#f59e0b',
    text: '#b45309',
  },
  red: {
    border: '#dc2626',
    bg: 'linear-gradient(180deg, #ffffff 0%, #fef2f2 100%)',
    dot: '#dc2626',
    text: '#991b1b',
  },
  yellow: {
    border: '#eab308',
    bg: 'linear-gradient(180deg, #ffffff 0%, #fefce8 100%)',
    dot: '#eab308',
    text: '#854d0e',
  },
  ink: {
    border: 'rgba(26,26,26,0.25)',
    bg: 'linear-gradient(180deg, #ffffff 0%, #fafaf8 100%)',
    dot: '#4a4a47',
    text: '#1a1a1a',
  },
};

const GROUP_STYLES = {
  teal:   { border: 'rgba(13,148,136,0.35)',  bg: 'rgba(13,148,136,0.04)',  label: '#0f766e' },
  amber:  { border: 'rgba(245,158,11,0.35)',  bg: 'rgba(245,158,11,0.04)',  label: '#b45309' },
  red:    { border: 'rgba(220,38,38,0.35)',   bg: 'rgba(220,38,38,0.04)',   label: '#991b1b' },
  yellow: { border: 'rgba(234,179,8,0.35)',   bg: 'rgba(234,179,8,0.05)',   label: '#854d0e' },
  ink:    { border: 'rgba(26,26,26,0.18)',    bg: 'rgba(26,26,26,0.015)',   label: '#1a1a1a' },
};

/** Individual service/component box. */
function BoxNode({ data }) {
  const s = ACCENT_STYLES[data.accent] || ACCENT_STYLES.ink;
  return (
    <div
      style={{
        background: s.bg,
        border: `1.5px solid ${s.border}`,
        borderRadius: 10,
        padding: '8px 12px',
        minWidth: 160,
        maxWidth: 220,
        boxShadow: '0 1px 3px rgba(20,20,20,0.06), 0 2px 8px rgba(20,20,20,0.04)',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <Handle type="target" position={Position.Top} style={{ background: s.dot, width: 6, height: 6, border: 'none' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.dot, flexShrink: 0 }} />
        <span style={{ fontSize: 11.5, fontWeight: 600, color: s.text, letterSpacing: 0.01 }}>
          {data.label}
        </span>
      </div>
      {data.subtitle && (
        <div style={{ marginTop: 3, fontSize: 10.5, color: '#6b6b66', lineHeight: 1.3 }}>
          {data.subtitle}
        </div>
      )}
      <Handle type="source" position={Position.Bottom} style={{ background: s.dot, width: 6, height: 6, border: 'none' }} />
      <Handle type="target" position={Position.Left} id="l" style={{ background: s.dot, width: 6, height: 6, border: 'none' }} />
      <Handle type="source" position={Position.Right} id="r" style={{ background: s.dot, width: 6, height: 6, border: 'none' }} />
    </div>
  );
}

/** Labeled container (Akamai Edge, AWS Security account, etc.) */
function GroupNode({ data }) {
  const s = GROUP_STYLES[data.accent] || GROUP_STYLES.ink;
  return (
    <div
      style={{
        background: s.bg,
        border: `1.5px dashed ${s.border}`,
        borderRadius: 14,
        width: '100%',
        height: '100%',
        position: 'relative',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -10,
          left: 14,
          background: '#fefefd',
          padding: '2px 10px',
          borderRadius: 999,
          border: `1px solid ${s.border}`,
          fontSize: 10.5,
          fontWeight: 600,
          color: s.label,
          letterSpacing: 0.04,
          textTransform: 'uppercase',
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        }}
      >
        {data.label}
      </div>
    </div>
  );
}

const NODE_TYPES = { box: BoxNode, group: GroupNode };

const DEFAULT_EDGE_STYLE = {
  stroke: 'rgba(26,26,26,0.35)',
  strokeWidth: 1.4,
};

export default function ReactFlowDiagram({ nodes = [], edges = [], height = 620 }) {
  // Inject default styling into nodes/edges so project data stays terse.
  const enhancedNodes = useMemo(
    () =>
      nodes.map((n) => ({
        ...n,
        draggable: n.type === 'box',
        selectable: n.type === 'box',
      })),
    [nodes]
  );

  const enhancedEdges = useMemo(
    () =>
      edges.map((e) => ({
        type: 'smoothstep',
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 14,
          height: 14,
          color: e.style?.stroke || DEFAULT_EDGE_STYLE.stroke,
        },
        style: { ...DEFAULT_EDGE_STYLE, ...(e.style || {}) },
        labelStyle: {
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          fontSize: 9.5,
          fill: '#4a4a47',
        },
        labelBgStyle: {
          fill: '#fefefd',
          stroke: 'rgba(26,26,26,0.08)',
          strokeWidth: 0.5,
        },
        labelBgPadding: [4, 3],
        labelBgBorderRadius: 4,
        ...e,
      })),
    [edges]
  );

  return (
    <div
      style={{
        width: '100%',
        height,
        background: 'linear-gradient(180deg, #fdfcf3 0%, #f5f5f0 100%)',
        border: '1px solid rgba(26,26,26,0.08)',
        borderRadius: 14,
        overflow: 'hidden',
      }}
      className="surface"
    >
      <ReactFlow
        nodes={enhancedNodes}
        edges={enhancedEdges}
        nodeTypes={NODE_TYPES}
        fitView
        fitViewOptions={{ padding: 0.15, minZoom: 0.2, maxZoom: 1.3 }}
        minZoom={0.2}
        maxZoom={1.8}
        proOptions={{ hideAttribution: true }}
        nodesDraggable
        nodesConnectable={false}
        elementsSelectable
        panOnDrag
        zoomOnScroll
        defaultEdgeOptions={{ type: 'smoothstep' }}
      >
        <Background color="rgba(26,26,26,0.08)" gap={20} size={1} />
        <Controls
          showInteractive={false}
          style={{
            background: '#fefefd',
            border: '1px solid rgba(26,26,26,0.08)',
            borderRadius: 8,
          }}
        />
        <MiniMap
          nodeColor={(n) => {
            const accent = n.data?.accent || 'ink';
            return (ACCENT_STYLES[accent] || ACCENT_STYLES.ink).dot;
          }}
          nodeStrokeWidth={2}
          maskColor="rgba(255,255,255,0.7)"
          style={{
            background: '#fefefd',
            border: '1px solid rgba(26,26,26,0.08)',
            borderRadius: 8,
          }}
          pannable
          zoomable
        />
      </ReactFlow>
    </div>
  );
}
